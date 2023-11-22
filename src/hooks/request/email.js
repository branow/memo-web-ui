import { useLocation } from "react-router-dom";
import EmailRequester from "../../request/email";
import Callback from "../../utils/callback";
import {
  createNewPasswordEmail,
  createVerificationEmail,
} from "../../utils/email-templates";
import useRequest from "./useRequest";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import usePostRequest from "./usePostRequest";
import { MultiValidator } from "../../utils/validator/validator";
import { getEmailValidator } from "../../utils/validator/validator-impl";

export { useVerificationEmail, useNewPasswordEmail };

function useVerificationEmail() {
  const location = useLocation();
  const receiver = location.state.receiver;
  const token = location.state.token;
  const email = createVerificationEmail(receiver, token);
  const callback = new Callback();
  const reqeust = ({ callback }) => new EmailRequester().post(email, callback);
  return { state: useRequest(reqeust, callback) };
}

function useNewPasswordEmail(password) {
  const history = useHistory();
  const callback = new Callback();
  callback.success.addAtEnd(() => history.push("/"));
  const reqeust = ({ data, callback }) => {
    const email = createNewPasswordEmail(data, password);
    new EmailRequester().post(email, callback);
  };
  const buildValidator = (email) =>
    new MultiValidator([getEmailValidator(email)]);
  return usePostRequest(() => {}, reqeust, callback, buildValidator);
}
