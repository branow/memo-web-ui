import Callback from "../../utils/callback";
import UserRequester from "../../request/user";
import { UserCookies } from "../../utils/user-cookie";
import useGetRequest from "./useGetRequest";
import usePostRequest from "./usePostRequest";
import { MultiValidator } from "../../utils/validator/validator";
import {
  getEmailValidator,
  getUsernameValidator,
} from "../../utils/validator/validator-impl";
import useDeleteRequest from "./useDeleteRequest";

export {
  useGetUserPrivateShortDetails,
  useGetUserPrivateGeneralDetails,
  useGetUserDetails,
  useGetUserPublicGeneralDetails,
  useSaveUser,
  useDeleteUser,
};

function useGetUserPrivateShortDetails() {
  const request = ({ callback, signal }) => {
    const jwt = new UserCookies().authorizationJwt.get();
    if (jwt) {
      new UserRequester().getUserPrivateShortDetails(jwt, callback, signal);
    }
  };
  const { dataState, state } = useGetRequest(request, new Callback());
  return {
    userState: { user: dataState.data, setUser: dataState.setData },
    state: state,
  };
}

function useGetUserPrivateGeneralDetails() {
  const request = ({ callback, signal }) => {
    const jwt = new UserCookies().authorizationJwt.get();
    if (jwt) {
      new UserRequester().getUserPrivateGeneralDetails(jwt, callback, signal);
    }
  };
  const { dataState, state } = useGetRequest(request, new Callback());
  return {
    userState: { user: dataState.data, setUser: dataState.setData },
    state: state,
  };
}

function useGetUserDetails() {
  const request = ({ callback, signal }) => {
    const jwt = new UserCookies().authorizationJwt.get();
    if (jwt) {
      new UserRequester().getUserDetails(jwt, callback, signal);
    }
  };
  const { dataState, state } = useGetRequest(request, new Callback());
  return {
    userState: { user: dataState.data, setUser: dataState.setData },
    state: state,
  };
}

function useGetUserPublicGeneralDetails() {
  const request = ({ data, callback }) => {
    const userId = data;
    new UserRequester().getUserPublicGeneralDetails(userId, callback);
  };
  const { dataState, state } = useGetRequest(request, new Callback());
  return {
    userState: { user: dataState.data, setUser: dataState.setData },
    state: state,
  };
}

function useSaveUser(setUser) {
  const request = ({ data, callback }) => {
    const jwt = new UserCookies().authorizationJwt.get;
    const user = data;
    new UserRequester().save(jwt, user, callback);
  };
  const buildValidator = (user) =>
    new MultiValidator([
      getUsernameValidator(user.username),
      getEmailValidator(user.email),
    ]);
  return usePostRequest(setUser, request, new Callback(), buildValidator);
}

function useDeleteUser(setUser) {
  const callback = new Callback();
  callback.success.addAtMiddle(() => new UserCookies().authorizationJwt.remove);
  const request = ({ callback }) => {
    const jwt = new UserCookies().authorizationJwt.get;
    new UserRequester().delete(jwt, callback);
  };
  return useDeleteRequest(setUser, request, callback);
}
