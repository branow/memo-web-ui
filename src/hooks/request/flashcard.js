import Callback from "../../utils/callback";
import FlashcardRequester from "../../request/flashcard";
import usePostRequest from "./usePostRequest";
import useGetRequest from "./useGetRequest";
import useDeleteRequest from "./useDeleteRequest";
import { UserCookies } from "../../utils/user-cookie";
import { MultiValidator } from "../../utils/validator/validator";

export { useGetFlashcardDetails, useSaveFlashcard, useDeleteFlashcard };

function useGetFlashcardDetails() {
  const request = ({ data, callback, signal }) => {
    new FlashcardRequester().getFlashcardDetails(data, callback, signal);
  };
  const { dataState, state } = useGetRequest(request, new Callback());
  return {
    userState: { flashcard: dataState.data, setFlashcard: dataState.setData },
    state: state,
  };
}

function useSaveFlashcard(setFlashcard) {
  const request = ({ data, callback }) => {
    const jwt = new UserCookies().authorizationJwt.get;
    new FlashcardRequester().save(
      jwt,
      data.collectionId,
      data.flashcard,
      callback
    );
  };
  const buildValidator = () => new MultiValidator([]);
  return usePostRequest(setFlashcard, request, new Callback(), buildValidator);
}

function useDeleteFlashcard(setFlashcard) {
  const request = ({ data, callback }) => {
    const jwt = new UserCookies().authorizationJwt.get;
    new FlashcardRequester().delete(jwt, data, callback);
  };
  return useDeleteRequest(setFlashcard, request, new Callback());
}
