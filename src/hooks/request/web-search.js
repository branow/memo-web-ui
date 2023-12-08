import Callback from "../../utils/callback";
import useGetRequest from "./useGetRequest";
import { UserCookies } from "../../utils/user-cookie";
import WebSearchRequester from "../../request/web-search";

export {
  useSearchAudios,
  useSearchImages,
  useSearchEnglishWord,
  useSearchEnglishWordSenses,
};

function useSearchImages(input) {
  const { dataState, state } = useSearch(
    input,
    (jwt, phrase, callback, signal) =>
      new WebSearchRequester().searchImages(jwt, phrase, callback, signal)
  );
  return {
    imagesState: { images: dataState.data, setImages: dataState.setData },
    state: state,
  };
}

function useSearchAudios(input) {
  const { dataState, state } = useSearch(
    input,
    (jwt, phrase, callback, signal) =>
      new WebSearchRequester().searchAudios(jwt, phrase, callback, signal)
  );
  return {
    audiosState: { audios: dataState.data, setAudios: dataState.setData },
    state: state,
  };
}

function useSearchEnglishWordSenses(input) {
  const { dataState, state } = useSearch(
    input,
    (jwt, phrase, callback, signal) =>
      new WebSearchRequester().searchEnglishWordSenses(jwt, phrase, callback, signal)
  );
  return {
    sensesState: { senses: dataState.data, setSenses: dataState.setData },
    state: state,
  };
}

function useSearchEnglishWord(input) {
  const { dataState, state } = useSearch(
    input,
    (jwt, phrase, callback, signal) =>
      new WebSearchRequester().searchEnglishWord(jwt, phrase, callback, signal)
  );
  return {
    wordState: { word: dataState.data, setWord: dataState.setData },
    state: state,
  };
}

function useSearch(input, searchFunction) {
  const request = ({ callback, signal }) => {
    if (!input) {
      throw new Error("Search field is empty");
    }
    const phrase = input.toLowerCase().replaceAll(" ", "-");
    const jwt = new UserCookies().authorizationJwt.get();
    searchFunction(jwt, phrase, callback, signal);
  };
  return useGetRequest(request, new Callback(), [input]);
}
