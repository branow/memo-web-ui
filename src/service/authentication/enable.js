import { UserCookies } from "../../util/user-cookie";
import AuthenticationRequester from "../../request/authentication";
import { serve } from "../service";

function enable(token, setUser, state, doFinally) {
  const addUser = (response) => {
    const jwt = response.data.jwt;
    new UserCookies().authorizationJwt.set(jwt);
    const user = response.data.user;
    setUser(user);
  };

  doFinally.success.addBefore(addUser);

  const doTask = (doFinally) => {
    new AuthenticationRequester().enable(token, doFinally);
  }
  serve(null, doTask, state, doFinally);
}

export default enable;
