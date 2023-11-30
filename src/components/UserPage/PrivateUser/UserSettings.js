import { useCallback, useContext, useState } from "react";
import { useChangePassword, useDeleteUser } from "../../../hooks/request/user";
import { UserContext } from "../../App";
import ErrorBox from "../../constant/ErrorBox";
import LoadingScreen from "../../constant/LoadingScreen";
import PasswordInputField from "../../constant/FormInput/PasswordInputField";
import SubmitButton from "../../constant/Buttons/SubmitButton";
import DeleteButton from "../../constant/Buttons/DeleteButton";

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
  }, [useChange, currentPassword, newPassword, confirmPassword]);

  const deleteCurrentUser = useCallback(() => {
    if (
      window.confirm(
        "After deletion, the account cannot be restored. Do you really want to delete your account?"
      )
    ) {
      useDelete.state.run();
    }
  }, [useDelete]);

  return (
    <div className="relative w-screen h-screen bg-dark-grey text-white border-l-2 border-left-solid border-main-green">
      <div className="mt-[10vh] flex flex-wrap justify-around">
        <div className="flex flex-col items-center">
          <div className="w-fit">
            <div className="text-xl font-medium my-[20px]">Password</div>
          </div>
          {useChange.state.error && (
            <ErrorBox
              title="Changing password error"
              message={useChange.state.error}
            />
          )}
          {useChange.state.pending && <LoadingScreen />}
          <div className="">
            <div className="my-[4vh]">
              <PasswordInputField
                label="Current Password"
                onChangeAction={useCallback(
                  (e) => setCurrentPassword(e.target.value),
                  []
                )}
              />
            </div>
            <div className="my-[4vh]">
              <PasswordInputField
                label="New Password"
                onChangeAction={useCallback(
                  (e) => setNewPassword(e.target.value),
                  []
                )}
              />
            </div>
            <div className="my-[4vh]">
              <PasswordInputField
                label="Confirm New Password"
                onChangeAction={useCallback(
                  (e) => setConfirmPassword(e.target.value),
                  []
                )}
              />
            </div>
          </div>
          <div className="">
            <SubmitButton actionName={"Save"} onClickAction={handleSumbit} />
          </div>
        </div>
        <div className="w-[25vw] flex flex-col items-center">
          <div className="text-xl font-medium my-[20px]">Advanced</div>
          {useDelete.state.error && (
            <ErrorBox title="Deleting error" message={useDelete.state.error} />
          )}
          {useDelete.state.pending && <LoadingScreen />}
          <div className="">
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
