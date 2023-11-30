import Callback from "../../utils/callback";
import useGetRequest from "./useGetRequest";
import { UserCookies } from "../../utils/user-cookie";
import SearchRequester from "../../request/search";

export {
  useSearchAudios,
  useSearchImages,
};

function useSearchImages() {
  const request = ({ data, callback, signal }) => {
    const phrase = data.toLowerCase().replaseAll(' ', '-');
    const jwt = new UserCookies().authorizationJwt.get();
    new SearchRequester().searchImages(jwt, phrase, callback, signal);
  };
  const { dataState, state } = useGetRequest(request, new Callback());
  return {
    imagesState: { images: dataState.data, setImages: dataState.setData },
    state: state,
  };
}

function useSearchAudios() {
  const request = ({ data, callback, signal }) => {
    const phrase = data.toLowerCase().replaseAll(' ', '-');
    const jwt = new UserCookies().authorizationJwt.get();
    new SearchRequester().searchAudios(jwt, phrase, callback, signal);
  };
  const { dataState, state } = useGetRequest(request, new Callback());
  return {
    audiousState: { audious: dataState.data, setAudious: dataState.setData },
    state: state,
  };
}