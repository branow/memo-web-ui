import FormInputWrapper from "../constant/FormInput/FormInputWrapper";
import PasswordInput from "../constant/FormInput/PasswordInput";
import FormSubmitButton from "../constant/FormInput/FormSubmitButton";
import DeleteButton from "../constant/DeleteButton";

const ProfileSettings = () => {
  return (
    <div className="relative w-screen h-screen bg-form-background-grey text-white border-l-2 border-left-solid border-main-green flex flex-row">
      <div>
        <div className="ml-[12vw] mt-[5vh] w-fit flex flex-col">
          <span className="text-3xl font-semibold">Profile Settings</span>
          <span className="text-xl font-medium m-auto mt-[20px]">Password</span>
        </div>
        <div className="ml-[7vw] mt-[5vh] w-[20vw]">
          <div className="my-[8vh]">
            <FormInputWrapper
              childrenInput={<PasswordInput />}
              inputName={"Current password"}
            />
          </div>
          <div className="my-[8vh]">
            <FormInputWrapper
              childrenInput={<PasswordInput />}
              inputName={"New password"}
            />
          </div>
          <div className="my-[8vh]">
            <FormInputWrapper
              childrenInput={<PasswordInput />}
              inputName={"Confirm new password"}
            />
          </div>
        </div>
        <div className="ml-[7vw]">
          <FormSubmitButton actionName={"Save"} />
        </div>
      </div>
      <div className="ml-[20vw] mt-[12vh] flex flex-col w-[25vw]">
        <span className="text-xl font-medium">Advanced</span>
        <div className="mt-[30px]">
          <DeleteButton actionName={"Delete account"} />
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
