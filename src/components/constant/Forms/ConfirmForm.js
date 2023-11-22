import { useEffect, useState, useCallback } from "react";
import SubmitButton from "../Buttons/SubmitButton";
import EmailInputField from "../FormInput/EmailInputField";
import LoadingScreen from "../LoadingScreen";
import ErrorBox from "../ErrorBox";

import {
  useEnable,
  useRegenerateToken,
} from "../../../hooks/request/authentication";

const ConfirmForm = ({ setUser }) => {
  const enable = useEnable(setUser);
  const regenerate = useRegenerateToken();
  const [email, setEmail] = useState("");

  useEffect(() => {
    enable.state.run();
  }, []);

  const handleSubmit = useCallback(() => {
    regenerate.state.run(email);
  },[]);

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
        <EmailInputField
          onChangeAction={useCallback((e) => setEmail(e.target.value), [])}
        />
        <div className="flex flex-col items-center">
        <SubmitButton actionName={"Send"} onClickAction={handleSubmit} />
        </div>
      </div>
      {(enable.state.pending || regenerate.state.pending) && <LoadingScreen />}
    </div>
  );
};

export default ConfirmForm;