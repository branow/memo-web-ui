import AuthenticationRequester from "../../request/authentication"
import {UserCookies} from "../../util/user-cookie";
import { MultiValidator } from "../../validator/validator";
import { getEmailValidator, getPasswordValidator } from "../../validator/validator-impl";
import { serve } from "../service";


function login(user, setUser, state, doSuccessCustom, doFailCustom) {
  const validator = new MultiValidator([
    getEmailValidator(user.email),
    getPasswordValidator(user.password),
  ]);
  const doSuccess = (response) => {
    const jwt = response.data.jwt;
    new UserCookies().authorizationJwt.set(jwt);
    const user = response.data.user;
    setUser(user);
  };
  const request = (success, fail) => {
    new AuthenticationRequester().login(user, success, fail);
  }
  serve(validator, request, state, [doSuccess, doSuccessCustom], [doFailCustom]);
}


export default login;
