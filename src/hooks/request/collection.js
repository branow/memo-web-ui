import { useHistory } from "react-router-dom";
import Callback from "../../utils/callback";
import { getCollectionNameValidator } from "../../utils/validator/validator-impl";
import CollectionRequester from "../../request/collection";
import usePostRequest from "./usePostRequest";
import useGetRequest from "./useGetRequest";
import useDeleteRequest from "./useDeleteRequest";

export { useGetCollectionDetails, useSaveCollection, useDeleteCollection };

function useGetCollectionDetails() {
  const request = ({ data, callback, signal }) => {
    new CollectionRequester().getCollectionDetails(data, callback, signal);
  };
  const { dataState, state } = useGetRequest(request, new Callback());
  return {
    userState: { collection: dataState.data, setCollection: dataState.setData },
    state: state,
  };
}

function useSaveCollection(setCollection) {
  const request = ({ data, callback }) => {
    const jwt = new UserCookies().authorizationJwt.get;
    new CollectionRequester().save(
      jwt,
      data.moduleId,
      data.collection,
      callback
    );
  };
  const buildValidator = (data) =>
    new MultiValidator([
      getCollectionNameValidator(data.collection.moduleName),
    ]);
  return usePostRequest(setCollection, request, new Callback(), buildValidator);
}

function useDeleteCollection(setCollection) {
  const callback = new Callback();
  const history = useHistory();
  callback.success.addAtEnd(() => history.push("/profile/public/modules"));
  const request = ({ data, callback }) => {
    const jwt = new UserCookies().authorizationJwt.get;
    new CollectionRequester().delete(jwt, data, callback);
  };
  return useDeleteRequest(setCollection, request, callback);
}
