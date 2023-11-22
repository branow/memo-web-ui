import Callback from "../../utils/callback";
import useRequest from "./useRequest";
import { MultiValidator } from "../../utils/validator/validator";
import {
  getEmailValidator,
  getPasswordValidator,
  getUsernameValidator,
  getPasswordsEqualValidator,
} from "../../utils/validator/validator-impl";
import { UserCookies } from "../../utils/user-cookie";
import {
  ValidatorFunctionWrapper,
  CallbackFunctionWrapper,
} from "../../utils/function-wrapper";
import { useHistory } from "react-router-dom";
import AuthenticationRequester from "../../request/authentication";
import { createNewPasswordEmail } from "../../utils/email-templates";
import usePostRequest from "./usePostRequest";

export {
  useLogin,
  useLogout,
  useRegister,
  useRegenerateToken,
  useEnable,
  useResetPassword,
};

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
      history.push("/verificate", {
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
    } else {
      throw new Error("There is not a verification token!");
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

function useResetPassword() {
  const history = useHistory();
  const callback = new Callback();
  callback.success.addAtEnd(() => history.push("/"));
  const request = ({ data, callback }) => {
    const emailDto = createNewPasswordEmail(data, "{PASSWORD}");
    new AuthenticationRequester().resetPassword(emailDto, callback);
  };
  const buildValidator = (email) =>
    new MultiValidator([getEmailValidator(email)]);
  return usePostRequest(() => {}, request, callback, buildValidator);
}
