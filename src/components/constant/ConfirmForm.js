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
    const doFinally = new DoFinally();
    doFinally.success.addAfter(() => history.push("/"));
    regenerateToken(email, token, new State(setPending, setError), doFinally);
  };

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
        <div className="w-fit m-auto">
          <FormSubmitButton actionName={"Send"} onClickAction={handleSubmit} />
        </div>
      </div>
      {(enable.state.pending || regenerate.state.pending) && <LoadingScreen />}
    </div>
  );
};

export default ConfirmForm;
