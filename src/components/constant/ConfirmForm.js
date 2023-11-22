import { HiOutlineMail } from "react-icons/hi";
import { useEffect, useState } from "react";
import FormInputWrapper from "./FormInput/FormInputWrapper";
import EmailInput from "./FormInput/EmailInput";
import FormSubmitButton from "./FormInput/FormSubmitButton";
import LoadingScreen from "./LoadingScreen";
import ErrorBox from "./ErrorBox";

import {
  useEnable,
  useRegenerateToken,
} from "../../hooks/request/authentication";

const ConfirmForm = ({ setUser }) => {
  const enable = useEnable(setUser);
  const regenerate = useRegenerateToken();
  const [email, setEmail] = useState("");

  useEffect(() => {
    enable.state.run();
  }, []);

  const handleSubmit = () => {
    regenerate.state.run(email);
  };

  return (
    <div className="w-[450px] p-[50px]">
      {enable.state.error && (
        <ErrorBox
          title="Reading Verification Token Error"
          message={enable.state.error}
        />
      )}
      <h2 className="text-[40px] mt-[20px] mb-[10px] text-white text-center font-semibold">
        Send email
      </h2>
      <h2 className="text-[16px] my-[10px] text-white text-center font-medium">
        Send new verification letter to your email again?
      </h2>
      {regenerate.state.error && (
        <ErrorBox
          title="Email Sending Error"
          message={regenerate.state.error}
        />
      )}
      <div>
        <FormInputWrapper
          childrenInput={
            <EmailInput onChangeAction={(e) => setEmail(e.target.value)} />
          }
          inputIcon={<HiOutlineMail className="mt-[7px]" size="20px" />}
          inputName={"Email"}
        />
        <div className="flex flex-col items-center">
          <FormSubmitButton actionName={"Send"} onClickAction={handleSubmit} />
        </div>
      </div>
      {(enable.state.pending || regenerate.state.pending) && <LoadingScreen />}
    </div>
  );
};

export default ConfirmForm;
