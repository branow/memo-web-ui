import Callback from "../../utils/callback";
import usePostRequest from "./usePostRequest";
import MediaRequester from "../../request/media";
import { UserCookies } from "../../utils/user-cookie";
import { MultiValidator } from "../../utils/validator/validator";

export { useSaveMedia };

function useSaveMedia(setMedia) {
  const request = ({ data, callback }) => {
    const jwt = new UserCookies().authorizationJwt.get();
    new MediaRequester().save(jwt, data, callback);
  };
  const buildValidator = () => new MultiValidator([]);
  return usePostRequest(setMedia, request, new Callback(), buildValidator);
}
