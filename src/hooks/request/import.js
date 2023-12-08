import Callback from "../../utils/callback";
import usePostRequest from "./usePostRequest";
import { UserCookies } from "../../utils/user-cookie";
import { MultiValidator } from "../../utils/validator/validator";
import ImportRequester from "../../request/import";

export { useImportFlashcard, useImportCollection, useImportModule };

function useImportFlashcard(setResponse) {
  const request = ({ data, callback }) => {
    const { flashcardId, targetCollectionId } = data;
    const jwt = new UserCookies().authorizationJwt.get();
    new ImportRequester().importFlashcard(
      jwt,
      flashcardId,
      targetCollectionId,
      callback
    );
  };
  const buildValidator = () => new MultiValidator([]);
  return usePostRequest(setResponse, request, new Callback(), buildValidator);
}

function useImportCollection(setResponse) {
  const request = ({ data, callback }) => {
    const { collectionId, targetModuleId } = data;
    const jwt = new UserCookies().authorizationJwt.get();
    new ImportRequester().importCollection(
      jwt,
      collectionId,
      targetModuleId,
      callback
    );
  };
  const buildValidator = () => new MultiValidator([]);
  return usePostRequest(setResponse, request, new Callback(), buildValidator);
}

function useImportModule(setResponse) {
  const request = ({ data, callback }) => {
    const moduleId = data;
    const jwt = new UserCookies().authorizationJwt.get();
    new ImportRequester().importModule(jwt, moduleId, callback);
  };
  const buildValidator = () => new MultiValidator([]);
  return usePostRequest(setResponse, request, new Callback(), buildValidator);
}
