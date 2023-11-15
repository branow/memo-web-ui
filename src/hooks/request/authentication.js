import Callback from "../../util/callback";
import useRequest from "./useRequest";
import { MultiValidator } from "../../validator/validator";
import {
  getEmailValidator,
  getPasswordValidator,
  getUsernameValidator,
  getPasswordsEqualValidator,
} from "../../validator/validator-impl";
import { UserCookies } from "../../util/user-cookie";
import {
  ValidatorFunctionWrapper,
  CallbackFunctionWrapper,
} from "../../util/function-wrapper";
import { useHistory } from "react-router-dom";
import AuthenticationRequester from "../../request/authentication";

export { useLogin, useLogout, useRegister, useRegenerateToken, useEnable };

function useLogin(setUser) {
  const history = new useHistory();
  const callback = new Callback();
  callback.success.addAtMiddle((response) => {
    const jwt = response.data.jwt;
    new UserCookies().authorizationJwt.set(jwt);
    const user = response.data.user;
    setUser(user);
  });
  callback.success.addAtEnd(() => history.push("/"));

  const request = ({ data, callback }) => {
    const user = data;
    const wrapper = new ValidatorFunctionWrapper(
      () => new AuthenticationRequester().login(user, callback),
      new MultiValidator([
        getEmailValidator(user.email),
        getPasswordValidator(user.password),
      ])
    );
    wrapper.wrap().apply();
  };

  return {
    state: useRequest(request, callback),
  };
}

function useLogout(setUser) {
  const history = new useHistory();
  const callback = new Callback();
  callback.success.addAtEnd(() => history.push("/"));

  const request = ({ callback }) => {
    new CallbackFunctionWrapper(() => {
      new UserCookies().authorizationJwt.remove();
      setUser(null);
    }, callback)
      .wrap()
      .apply();
  };

  return {
    state: useRequest(request, callback),
  };
}

function useRegister() {
  const history = useHistory();
  const callback = new Callback();

  const request = ({ data, callback }) => {
    const user = data;

    callback.success.addAtEnd((response) => {
      console.log(response.data.token);
      history.push("/send-verification-token", {
        token: response.data.token,
        receiver: user.email,
      });
    });

    const wrapper = new ValidatorFunctionWrapper(
      () => new AuthenticationRequester().register(user, callback),
      new MultiValidator([
        getUsernameValidator(user.username),
        getEmailValidator(user.email),
        getPasswordsEqualValidator([user.password, user.confirmPassword]),
        getPasswordValidator(user.password),
      ])
    );
    wrapper.wrap().apply();
  };

  return {
    state: useRequest(request, callback),
  };
}

function useEnable(setUser) {
  const token = new URLSearchParams(window.location.search).get("token");
  const history = new useHistory();
  const callback = new Callback();
  callback.success.addAtMiddle((response) => {
    const jwt = response.data.jwt;
    new UserCookies().authorizationJwt.set(jwt);
    const user = response.data.user;
    setUser(user);
  });
  callback.success.addAtEnd(() => history.push("/"));

  const request = ({ callback }) => {
    if (token) {
      new AuthenticationRequester().enable(token, callback);
    }
  };

  return {
    state: useRequest(request, callback),
  };
}

function useRegenerateToken() {
  const oldToken = new URLSearchParams(window.location.search).get("token");
  const history = useHistory();
  const callback = new Callback();

  const request = ({ data, callback }) => {
    const email = data;
    callback.success.addAtEnd((response) => {
      history.push("/send-verification-token", {
        token: response.data.token,
        receiver: email,
      });
    });

    const wrapper = new ValidatorFunctionWrapper(
      () =>
        new AuthenticationRequester().regenerateToken(
          email,
          oldToken,
          callback
        ),
      new MultiValidator([getEmailValidator(email)])
    );
    return wrapper.wrap().apply();
  };

  return {
    state: useRequest(request, callback),
  };
}
