import Callback from "../../utils/callback";
import FlashcardRequester from "../../request/flashcard";
import usePostRequest from "./usePostRequest";
import useGetRequest from "./useGetRequest";
import useDeleteRequest from "./useDeleteRequest";
import { UserCookies } from "../../utils/user-cookie";
import { MultiValidator } from "../../utils/validator/validator";

export { useGetFlashcardDetails, useSaveFlashcard, useDeleteFlashcard };

function useGetFlashcardDetails(flashcardId) {
  const request = ({ callback, signal }) => {
    new FlashcardRequester().getFlashcardDetails(flashcardId, callback, signal);
  };
  const { dataState, state } = useGetRequest(request, new Callback());
  return {
    flashcardState: { flashcard: dataState.data, setFlashcard: dataState.setData },
    state: state,
  };
}

function useSaveFlashcard(setFlashcard, close) {
  const request = ({ data, callback }) => {
    const jwt = new UserCookies().authorizationJwt.get();
    new FlashcardRequester().save(
      jwt,
      data.flashcard,
      data.collectionId,
      callback
    );
  };
  const callback = new Callback();
  callback.success.addAtEnd(() => {if (close) close() });
  const buildValidator = () => new MultiValidator([]);
  return usePostRequest(setFlashcard, request, callback, buildValidator);
}

function useDeleteFlashcard(setFlashcard) {
  const request = ({ data, callback }) => {
    const jwt = new UserCookies().authorizationJwt.get();
    new FlashcardRequester().delete(jwt, data, callback);
  };
  return useDeleteRequest(setFlashcard, request, new Callback());
}
