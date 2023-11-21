import LoadingScreen from "../LoadingScreen";
import ErrorBox from "../ErrorBox";
import { useVerificationEmail } from "../../../hooks/request/email";
import { useEffect } from "react";

const VerificationEmailForm = () => {
  const { state } = useVerificationEmail();

  useEffect(() => state.run(), []);

  return (
    <div className="w-[450px] p-[50px]">
      <h2 className="text-[40px] text-white text-center font-semibold">
        Send Verification Email
      </h2>

      {state.error && (
        <ErrorBox
          errorTitle="Email Sending Error"
          errorMessage={state.error}
        />
      )}

      {state.pending && <LoadingScreen />}
    </div>
  );
};

export default VerificationEmailForm;
