import Callback from "../../utils/callback";
import useGetRequest from "./useGetRequest";
import { UserCookies } from "../../utils/user-cookie";
import SearchRequester from "../../request/search";

export {
  useSearchAudios,
  useSearchImages,
};

function useSearchImages(input) {
  const request = ({ callback, signal }) => {
    if (!input) {
      throw new Error("Search field is empty");
    }
    const phrase = input.toLowerCase().replaceAll(' ', '-');
    const jwt = new UserCookies().authorizationJwt.get();
    new SearchRequester().searchImages(jwt, phrase, callback, signal);
  };
  const { dataState, state } = useGetRequest(request, new Callback(), [input]);
  return {
    imagesState: { images: dataState.data, setImages: dataState.setData },
    state: state,
  };
}

function useSearchAudios(input) {
  const request = ({ callback, signal }) => {
    if (!input) {
      throw new Error("Search field is empty");
    }
    const phrase = input.toLowerCase().replaceAll(' ', '-');
    const jwt = new UserCookies().authorizationJwt.get();
    new SearchRequester().searchAudios(jwt, phrase, callback, signal, [input]);
  };
  const { dataState, state } = useGetRequest(request, new Callback());
  return {
    audiosState: { audios: dataState.data, setAudios: dataState.setData },
    state: state,
  };
}