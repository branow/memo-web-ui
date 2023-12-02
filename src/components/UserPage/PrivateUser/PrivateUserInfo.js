import Avatar from "../../constant/Icons/Avatar";
import { UserContext } from "../../App";
import { useContext } from "react";
import ErrorBox from "../../constant/ErrorBox";
import { useGetUserDetails, useSaveUser } from "../../../hooks/request/user";
import LoadingScreen from "../../constant/LoadingScreen";
import EmailInputField from "../../constant/FormInput/EmailInputField";
import UserNameInputField from "../../constant/FormInput/UsernameInputField";
import SubmitButton from "../../constant/Buttons/SubmitButton";

const PrivateUserInfo = () => {
  const appUserState = useContext(UserContext);
  const useGet = useGetUserDetails();
  const useSave = useSaveUser((savedUser) => {
    appUserState.setUser((p) => {
      return {
        userId: p.userId,
        username: savedUser.username,
        email: savedUser.email,
        enable: p.enable,
      };
    });
  });

  const setUsername = (username) => {
    useGet.userState.setUser((p) => {
      return {
        userId: p.userId,
        username: username,
        email: p.email,
        desription: p.desription,
      };
    });
  };
  const setEmail = (email) => {
    useGet.userState.setUser((p) => {
      return {
        userId: p.userId,
        username: p.username,
        email: email,
        desription: p.desription,
      };
    });
  };
  const setDescription = (description) => {
    useGet.userState.setUser((p) => {
      return {
        userId: p.userId,
        username: p.username,
        email: p.email,
        description: description,
      };
    });
  };

  const handleSumbit = () => {
    useSave.state.run({
      userId: useGet.userState.user.userId,
      username: useGet.userState.user.username,
      email: useGet.userState.user.email,
      description: useGet.userState.user.description,
    });
  };

  return (
    <div className="relative w-screen h-screen bg-dark-grey text-white border-l-2 border-left-solid border-main-green flex flex-col items-center">
      <div className="mt-[3vh] text-3xl font-semibold flex flex-col items-center">
        <div className="m-[20px]">Profile Info</div>
        <Avatar className="m-[10px]" color="white" size="70px" />
      </div>
      <div className="flex items-center justify-around py-[4vh] px-[2vw] w-[85%]">
        <div className="flex flex-col items-center px-[2wh]">
          {useGet.state.error && (
            <ErrorBox
              title={"Authentification error"}
              message={useGet.state.error}
            />
          )}
          {useSave.state.error && (
            <ErrorBox title={"Saving error"} message={useSave.state.error} />
          )}
          {(useGet.state.pending || useSave.state.pending) && <LoadingScreen />}

          {useGet.userState.user && (
            <>
              <div className="">
                <div className="my-[5vh]">
                  <UserNameInputField
                    onChangeAction={(e) => setUsername(e.target.value)}
                    value={useGet.userState.user.username}
                  />
                </div>
                <div className="my-[5vh]">
                  <EmailInputField
                    onChangeAction={(e) => setEmail(e.target.value)}
                    value={useGet.userState.user.email}
                  />
                </div>
              </div>
              <div className="my-[1vw]">
                <SubmitButton
                  onClickAction={handleSumbit}
                  actionName={"Save"}
                />
              </div>
            </>
          )}
        </div>
        <div className="text-xl font-medium flex flex-col items-center px-[2vw]">
          <div>Description</div>
          {useGet.userState.user && (
            <textarea
              className="text-sm mt-[20px] bg-dark-grey text-white border-[1px] border-left-solid border-gray-300 rounded-lg p-5"
              cols="40"
              rows="10"
              defaultValue={useGet.userState.user.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivateUserInfo;
