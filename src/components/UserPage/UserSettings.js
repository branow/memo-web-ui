import FormInputWrapper from "../constant/FormInput/FormInputWrapper";
import PasswordInput from "../constant/FormInput/PasswordInput";
import FormSubmitButton from "../constant/FormInput/FormSubmitButton";
import DeleteButton from "../constant/DeleteButton";
import { useCallback, useContext, useState } from "react";
import { useChangePassword, useDeleteUser } from "../../hooks/request/user";
import { UserContext } from "../App";
import ErrorBox from "../constant/ErrorBox";
import LoadingScreen from "../constant/LoadingScreen";

const ProfileSettings = () => {
  const userState = useContext(UserContext);
  const useChange = useChangePassword();
  const useDelete = useDeleteUser(userState.setUser);
  const [currentPassword, setCurrentPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleSumbit = useCallback(() => {
    const dto = {
      currentPassword: currentPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };
    useChange.state.run(dto);
  }, [useChange.state, currentPassword, newPassword, confirmPassword]);

  const deleteCurrentUser = useCallback(() => {
    if (window.confirm("After deletion, the account cannot be restored. Do you really want to delete your account?")) {
      useDelete.state.run();
    }
  }, [useDelete.state]);

  return (
    <div className="relative w-screen h-screen bg-form-background-grey text-white border-l-2 border-left-solid border-main-green">
      <div className="mt-[10vh] flex flex-wrap justify-around">
      <div className="flex flex-col items-center">
        <div className="w-fit">
          <div className="text-xl font-medium m-auto">Password</div>
        </div>
        {useChange.state.error && (
          <ErrorBox title="Changing password error" message={useChange.state.error} />
        )}
        {useChange.state.pending && <LoadingScreen />}
        <div className="">
          <div className="my-[5vh]">
            <FormInputWrapper
              childrenInput={
                <PasswordInput
                  onChangeAction={useCallback((e) => setCurrentPassword(e.target.value), [])}
                />
              }
              inputName={"Current password"}
            />
          </div>
          <div className="my-[5vh]">
            <FormInputWrapper
              childrenInput={
                <PasswordInput
                  onChangeAction={useCallback((e) => setNewPassword(e.target.value), [])}
                />
              }
              inputName={"New password"}
            />
          </div>
          <div className="my-[5vh]">
            <FormInputWrapper
              childrenInput={
                <PasswordInput
                  onChangeAction={useCallback((e) => setConfirmPassword(e.target.value), [])}
                />
              }
              inputName={"Confirm new password"}
            />
          </div>
        </div>
        <div className="">
          <FormSubmitButton actionName={"Save"} onClickAction={handleSumbit} />
        </div>
      </div>
      <div className="w-[25vw] flex flex-col items-center">
        <div className="text-xl font-medium">Advanced</div>
        {useDelete.state.error && (
          <ErrorBox title="Deleting error" message={useDelete.state.error} />
        )}
        {useDelete.state.pending && <LoadingScreen />}
        <div className="mt-[30px]">
          <DeleteButton
            actionName={"Delete account"}
            onClickAction={deleteCurrentUser}
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
