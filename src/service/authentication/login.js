import AuthenticationRequester from "../../request/authentication"
import {UserCookies} from "../../util/user-cookie";
import { MultiValidator } from "../../validator/validator";
import { getEmailValidator, getPasswordValidator } from "../../validator/validator-impl";
import { serve } from "../service";


function login(user, setUser, state, doFinally) {
  const validator = new MultiValidator([
    getEmailValidator(user.email),
    // getPasswordValidator(user.password),
  ]);

  const addUser = (response) => {
    const jwt = response.data.jwt;
    new UserCookies().authorizationJwt.set(jwt);
    const user = response.data.user;
    setUser(user);
  };

  doFinally.success.addBefore(addUser);
  
  const doTask = (doFinally) => {
    new AuthenticationRequester().login(user, doFinally);
  }
  serve(validator, doTask, state, doFinally);
}


export default login;
