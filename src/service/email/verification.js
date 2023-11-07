import EmailRequester from "../../request/email";
import { createVerificationEmail } from "../../util/email-templates";
import { serve } from "../service";


function sendVerificationEmail(receiver, token, state, doFinally) {
  const emailDto = createVerificationEmail(receiver, token);
  const doTask = (doFinally) => {
    new EmailRequester().post(emailDto, doFinally);
  }
  serve(null, doTask, state, doFinally);
}


export default sendVerificationEmail;
