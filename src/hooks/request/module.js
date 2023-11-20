import { useHistory } from "react-router-dom";
import ModuleRequester from "../../request/module";
import Callback from "../../utils/callback";
import { getModuleNameValidator } from "../../utils/validator/validator-impl";

export {
  useGetModlueGeneralDetails,
  useGetModuдeDetails,
  useSaveModule,
  useDeleteModule,
};

function useGetModlueGeneralDetails() {
  const request = ({ data, callback, signal }) => {
    new ModuleRequester().getModuleGeneralDetails(data, callback, signal);
  };
  const { dataState, state } = useGetRequest(request, new Callback());
  return {
    userState: { module: dataState.data, setModule: dataState.setData },
    state: state,
  };
}

function useGetModuдeDetails() {
  const request = ({ data, callback, signal }) => {
    new ModuleRequester().getModuleDetails(data, callback, signal);
  };
  const { dataState, state } = useGetRequest(request, new Callback());
  return {
    userState: { module: dataState.data, setModule: dataState.setData },
    state: state,
  };
}

function useSaveModule(setModule) {
  const request = ({ data, callback }) => {
    const jwt = new UserCookies().authorizationJwt.get;
    new ModuleRequester().save(jwt, data, callback);
  };
  const buildValidator = (module) =>
    new MultiValidator([getModuleNameValidator(module.moduleName)]);
  return usePostRequest(setModule, request, new Callback(), buildValidator);
}

function useDeleteModule(setModule) {
  const callback = new Callback();
  const history = useHistory();
  callback.success.addAtEnd(() => history.push("/profile/public/modules"));
  const request = ({ data, callback }) => {
    const jwt = new UserCookies().authorizationJwt.get;
    new ModuleRequester().delete(jwt, data, callback);
  };
  return useDeleteRequest(setModule, request, new Callback());
}
