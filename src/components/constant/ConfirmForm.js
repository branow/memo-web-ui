import { useEffect, useState, useCallback } from "react";
import SubmitButton from "./SubmitButton";
import EmailInputField from "./FormInput/EmailInputField";
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

  const handleSubmit = useCallback(() => {
    regenerate.state.run(email);
  },[]);

  return (
    <div className="w-[450px] p-[50px]">
      <h2 className="text-[40px] text-white text-center font-semibold">
        Send email
      </h2>
      <h2 className="text-[16px] my-[20px] text-white text-center font-medium">
        Registration confirmation timed out, send your email again
      </h2>
      {enable.state.error && (
        <ErrorBox errorTitle="Email Error" errorMessage={enable.state.error} />
      )}
      {regenerate.state.error && (
        <ErrorBox
          errorTitle="Email Error"
          errorMessage={regenerate.state.error}
        />
      )}
      <div>
        <EmailInputField
          onChangeAction={useCallback((e) => setEmail(e.target.value), [])}
        />
        <SubmitButton actionName={"Send"} onClickAction={handleSubmit} />
      </div>
      {(enable.state.pending || regenerate.state.pending) && <LoadingScreen />}
    </div>
  );
};

export default ConfirmForm;