
import AuthenticationRequester from "../../request/authentication";
import {serve} from "../service";
import sendVerificationEmail from "../email/verification";
import { MultiValidator } from "../../validator/validator";
import { getEmailValidator } from "../../validator/validator-impl";

function regenerateToken(email, oldToken, state, doFinally) {
  const validator = new MultiValidator([
    getEmailValidator
  ]);

  const sendEmail = (response) => {
    const token = response.data.token;
    sendVerificationEmail(email, token, state);
  };

  doFinally.success.addBefore(sendEmail);

  const doTask = (doFinally) => {
    new AuthenticationRequester().regenerateToken(email, oldToken, doFinally);
  }
  serve(validator, doTask, state, doFinally);
}

export default regenerateToken;