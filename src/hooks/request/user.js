import Callback from "../../utils/callback";
import UserRequester from "../../request/user";
import { UserCookies } from "../../utils/user-cookie";
import useGetRequest from "./useGetRequest";
import usePostRequest from "./usePostRequest";
import { MultiValidator } from "../../utils/validator/validator";
import {
  getEmailValidator,
  getPasswordValidator,
  getPasswordsEqualValidator,
  getUsernameValidator,
} from "../../utils/validator/validator-impl";
import useDeleteRequest from "./useDeleteRequest";
import { useHistory } from "react-router-dom";

export {
  useGetUserPrivateShortDetails,
  useGetUserGeneralDetails,
  useGetUserDetails,
  useSaveUser,
  useChangePassword,
  useDeleteUser,
};

function useGetUserPrivateShortDetails() {
  const request = ({ callback, signal }) => {
    const jwt = new UserCookies().authorizationJwt.get();
    new UserRequester().getUserPrivateShortDetails(jwt, callback, signal);
  };
  const callback = new Callback();
  callback.error.addAtEnd(() => new UserCookies().authorizationJwt.remove());
  const { dataState, state } = useGetRequest(request, callback);
  return {
    userState: { user: dataState.data, setUser: dataState.setData },
    state: state,
  };
}

function useGetUserGeneralDetails(userId) {
  const request = ({ callback, signal }) => {
    const jwt = new UserCookies().authorizationJwt.get();
    new UserRequester().getUserGeneralDetails(jwt, userId, callback, signal);
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
    new UserRequester().getUserDetails(jwt, callback, signal);
  };
  const { dataState, state } = useGetRequest(request, new Callback());
  return {
    userState: { user: dataState.data, setUser: dataState.setData },
    state: state,
  };
}

function useSaveUser(setUser) {
  const request = ({ data, callback }) => {
    const jwt = new UserCookies().authorizationJwt.get();
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

function useChangePassword() {
  const request = ({ data, callback }) => {
    const jwt = new UserCookies().authorizationJwt.get();
    const changePasswordDto = {
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    };
    new UserRequester().changePassword(jwt, changePasswordDto, callback);
  };
  const buildValidator = (changePasswordDto) =>
    new MultiValidator([
      getPasswordValidator(changePasswordDto.newPassword),
      getPasswordsEqualValidator([
        changePasswordDto.newPassword,
        changePasswordDto.confirmPassword,
      ]),
    ]);
  return usePostRequest(() => {}, request, new Callback(), buildValidator);
}

function useDeleteUser(setUser) {
  const history = useHistory();
  const callback = new Callback();
  callback.success.addAtMiddle(() =>
    new UserCookies().authorizationJwt.remove()
  );
  callback.success.addAtEnd(() => history.push("/"));
  const request = ({ callback }) => {
    const jwt = new UserCookies().authorizationJwt.get();
    new UserRequester().delete(jwt, callback);
  };
  return useDeleteRequest(setUser, request, callback);
}
