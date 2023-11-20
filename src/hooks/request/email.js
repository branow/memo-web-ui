import { useLocation } from "react-router-dom";
import EmailRequester from "../../request/email";
import Callback from "../../utils/callback";
import { createVerificationEmail } from "../../utils/email-templates";
import useRequest from "./useRequest";

export { useVerificationEmail };

function useVerificationEmail() {
  const location = useLocation();
  const receiver = location.state.receiver;
  const token = location.state.token;
  const email = createVerificationEmail(receiver, token);
  const callback = new Callback();
  const reqeust = ({ callback }) => new EmailRequester().post(email, callback);
  return { state: useRequest(reqeust, callback) };
}
