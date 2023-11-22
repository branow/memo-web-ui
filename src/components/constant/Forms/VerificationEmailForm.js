import LoadingScreen from "../LoadingScreen";
import ErrorBox from "../ErrorBox";
import { useVerificationEmail } from "../../../hooks/request/email";
import { useCallback, useEffect } from "react";
import SubmitButton from "../Buttons/SubmitButton";

const VerificationEmailForm = () => {
  const { state } = useVerificationEmail();

  useEffect(() => state.run(), []);

  const handleSubmit = useCallback(() => {
    state.run();
  }, [state])

  return (
    <div className="w-[450px] p-[50px]">
      <h2 className="text-[40px] text-white text-center font-semibold">
        Send Verification Email
      </h2>

      {state.error && (
        <ErrorBox
          title="Email Sending Error"
          message={state.error}
        />
      )}

      <div className="m-auto my-[20px] w-fit">
        <SubmitButton actionName="Resend" onClickAction={handleSubmit}/>
      </div>

      {state.pending && <LoadingScreen />}
    </div>
  );
};

export default VerificationEmailForm;
