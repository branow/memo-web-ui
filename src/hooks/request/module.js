import { useHistory } from "react-router-dom";
import ModuleRequester from "../../request/module";
import Callback from "../../utils/callback";
import { getModuleNameValidator } from "../../utils/validator/validator-impl";
import usePostRequest from "./usePostRequest";
import useGetRequest from "./useGetRequest";
import useDeleteRequest from "./useDeleteRequest";
import { UserCookies } from "../../utils/user-cookie";
import { MultiValidator } from "../../utils/validator/validator";

export {
  useGetModuleGeneralDetails,
  useGetModuleDetails,
  useSaveModule,
  useDeleteModule,
};

function useGetModuleGeneralDetails(moduleId) {
  const request = ({ callback, signal }) => {
    new ModuleRequester().getModuleGeneralDetails(moduleId, callback, signal);
  };
  const { dataState, state } = useGetRequest(request, new Callback());
  return {
    moduleState: { module: dataState.data, setModule: dataState.setData },
    state: state,
  };
}

function useGetModuleDetails(moduleId) {
  const request = ({ callback, signal }) => {
    new ModuleRequester().getModuleDetails(moduleId, callback, signal);
  };
  const { dataState, state } = useGetRequest(request, new Callback());
  return {
    moduleState: { module: dataState.data, setModule: dataState.setData },
    state: state,
  };
}

function useSaveModule(setModule) {
  const request = ({ data, callback }) => {
    const jwt = new UserCookies().authorizationJwt.get();
    new ModuleRequester().save(jwt, data, callback);
  };
  const buildValidator = (module) =>
    new MultiValidator([getModuleNameValidator(module.moduleName)]);
  return usePostRequest(setModule, request, new Callback(), buildValidator);
}

function useDeleteModule(setModule) {
  const callback = new Callback();
  const history = useHistory();
  const request = ({ data, callback }) => {
    callback.success.addAtEnd(() => history.push("/profile/" + data + "/modules"));
    const jwt = new UserCookies().authorizationJwt.get();
    new ModuleRequester().delete(jwt, data, callback);
  };
  return useDeleteRequest(setModule, request, callback);
}
