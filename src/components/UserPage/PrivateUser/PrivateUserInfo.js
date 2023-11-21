import { RxAvatar } from "react-icons/rx";
import UsernameInputField from "../../constant/FormInput/UsernameInputField";
import EmailInputField from "../../constant/FormInput/EmailInputField";
import SubmitButton from "../../constant/Buttons/SubmitButton";

const PrivateUserInfo = () => {
  return (
    <div className="relative w-screen h-screen bg-form-background-grey text-white border-l-2 border-left-solid border-main-green flex flex-row">
      <div>
        <div className="text-3xl font-semibold ml-[12vw] mt-[5vh] w-fit">
          <span>Profile Info</span>
          <RxAvatar className="m-auto mt-[20px]" color="white" size="70px" />
        </div>
        <div className="ml-[7vw] mt-[5vh] w-[20vw]">
          <div className="my-[8vh]">
          <UsernameInputField/>
          </div>
          <div className="my-[8vh]">
          <EmailInputField/>
          </div>
        </div>
        <div className="ml-[7vw]">
          <SubmitButton actionName={"Save"} />
        </div>
      </div>
      <div className="text-xl font-medium ml-[15vw] mt-[20vh] flex flex-col w-[25vw]">
        <span>Description</span>
        <textarea
          className="mt-[20px] bg-form-background-grey text-white border-[1px] border-left-solid border-gray-300 rounded-lg"
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>
  );
};

export default PrivateUserInfo;
