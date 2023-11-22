import Callback from "../../utils/callback";
import usePostRequest from "./usePostRequest";
import FormattedTextRequester from "../../request/formatted-text";
import { UserCookies } from "../../utils/user-cookie";
import { MultiValidator } from "../../utils/validator/validator";

export { useSaveFormattedText };

function useSaveFormattedText(setFormattedText) {
  const request = ({ data, callback }) => {
    const jwt = new UserCookies().authorizationJwt.get();
    new FormattedTextRequester().save(jwt, data, callback);
  };
  const buildValidator = () => new MultiValidator([]);
  return usePostRequest(
    setFormattedText,
    request,
    new Callback(),
    buildValidator
  );
}
