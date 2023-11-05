import EmailRequester from "../../request/email";
import { createVerificationEmail } from "../../util/email-templates";
import { serve } from "../service";


function sendVerificationEmail(receiver, token, state, doSuccessCustom, doFailCustom) {
  const emailDto = createVerificationEmail(receiver, token);
  const doTask = (success, fail) => {
    new EmailRequester().post(emailDto, success, fail);
  }
  serve(null, doTask, state, [doSuccessCustom], [doFailCustom]);
}


export default sendVerificationEmail;
