import AuthenticationRequester from "../../request/authentication"
import { MultiValidator } from "../../validator/validator";
import { getEmailValidator, getPasswordValidator, getPasswordsEqualValidator, getUsernameValidator } from "../../validator/validator-impl";
import sendVerificationEmail from "../email/verification";
import { serve } from "../service";


function register(user, state, doFinally) {
  const validator = new MultiValidator([
    getUsernameValidator(user.username),
    getEmailValidator(user.email),
    getPasswordsEqualValidator([user.password, user.confirmPassword]),
    getPasswordValidator(user.password),
  ]);

  const sendEmail = (response) => {
    const token = response.data.token;
    sendVerificationEmail(user.email, token, state);
  };

  doFinally.success.addAfter(sendEmail);

  const doTask = (doFinally) => {
    new AuthenticationRequester().register(user, doFinally);
  }
  serve(validator, doTask, state, doFinally);
}


export default register;
