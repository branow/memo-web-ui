import { RxAvatar } from "react-icons/rx";
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

  // console.log("Private User Info: username: " + username + ", email: " + email + ", description: " + description);

  return (
    <div className="relative w-screen h-screen bg-form-background-grey text-white border-l-2 border-left-solid border-main-green flex flex-row">
      <div>
        <div className="text-3xl font-semibold ml-[12vw] mt-[5vh] w-fit">
          <span>Profile Info</span>
          <RxAvatar className="m-auto mt-[20px]" color="white" size="70px" />
        </div>
        {useGet.state.error && (
          <ErrorBox
            title={"Authentification error"}
            message={useGet.state.error}
          />
        )}
        {useSave.state.error && (
          <ErrorBox title={"Saving error"} message={useSave.state.error} />
        )}
        {(useGet.state.pending || useSave.state.pending) && (
          <LoadingScreen />
        )}

        {useGet.userState.user && (
          <>
            <div className="ml-[7vw] mt-[5vh] w-[20vw]">
              <div className="my-[8vh]">
              <UserNameInputField
                      onChangeAction={(e) =>
                        setUsername(e.target.value)
                      }
                      value={useGet.userState.user.username}
                    />
              </div>
              <div className="my-[8vh]">

                    <EmailInputField
                      onChangeAction={(e) => setEmail(e.target.value)}
                      value={useGet.userState.user.email}
                    />
              </div>
            </div>
            <div className="ml-[7vw]">
              <SubmitButton onClickAction={handleSumbit} actionName={"Save"} />
            </div>
          </>
        )}
      </div>
      <div className="text-xl font-medium ml-[15vw] mt-[20vh] flex flex-col w-[25vw]">
        <span>Description</span>
        {useGet.userState.user && (
          <textarea
            className="mt-[20px] bg-form-background-grey text-white border-[1px] border-left-solid border-gray-300 rounded-lg p-5"
            cols="30"
            rows="10"
            defaultValue={useGet.userState.user.description}
            onChange={(e) => setDescription(e.target.value)}
          />
        )}
      </div>
    </div>
  );
};

export default PrivateUserInfo;
