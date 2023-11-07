import AuthenticationRequester from "../../request/authentication"
import DoFinally from "../../util/do-finally";
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
    sendVerificationEmail(user.email, token, state, doFinally);
  };

  const doFinally1 = new DoFinally();
  doFinally1.success.addBefore(sendEmail);

  const doTask = () => {
    new AuthenticationRequester().register(user, doFinally1);
  }
  serve(validator, doTask, state, doFinally);
}


export default register;
