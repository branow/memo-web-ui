import AuthenticationRequester from "../../request/authentication"
import { MultiValidator } from "../../validator/validator";
import { getEmailValidator, getPasswordValidator, getPasswordsEqualValidator, getUsernameValidator } from "../../validator/validator-impl";
import sendVerificationEmail from "../email/verification";
import { serve } from "../service";


function register(user, state, doSuccessCustom, doFailCustom) {
  const validator = new MultiValidator([
    getUsernameValidator(user.username),
    getEmailValidator(user.email),
    getPasswordsEqualValidator([user.password, user.confirmPassword]),
    getPasswordValidator(user.password),
  ]);

  const doSuccess = (response) => {
    const token = response.data.token;
    sendVerificationEmail(user.email, token, state);
  };
  const request = (success, fail) => {
    new AuthenticationRequester().register(user, success, fail);
  }
  serve(validator, request, state, [doSuccess, doSuccessCustom], [doFailCustom]);
}


export default register;
