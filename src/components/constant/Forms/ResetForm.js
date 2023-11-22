import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import EmailInputField from "../FormInput/EmailInputField";
import SubmitButton from "../Buttons/SubmitButton";
import LoadingScreen from "../LoadingScreen";
import ErrorBox from "../ErrorBox";
import { useResetPassword } from "../../../hooks/request/authentication";

const ResetForm = () => {
  const useReset = useResetPassword();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    useReset.state.run(email);
  };

  return (
    <div className="w-[450px] p-[50px]">
      <h2 className="text-[40px] text-white text-center font-semibold">
        Reset password
      </h2>
      <h2 className="text-[16px] my-[20px] text-white text-center font-medium">
        Type your email to send verification letter
      </h2>

      {useReset.state.error && (
        <ErrorBox title="Email Sending Error" message={useReset.state.error} />
      )}

      <div>
        <EmailInputField
          onChangeAction={useCallback((e) => setEmail(e.target.value), [])}
        />
        <div className="w-fit m-auto">
          <SubmitButton actionName={"Send"} onClickAction={handleSubmit} />
        </div>

        <div className="text-[1em] text-white font-medium mt-[45px] mb-[15px] flex justify-between">
          <Link to="/register" className="cursor-pointer hover:underline">
            <span>Create an account?</span>
          </Link>
          <Link to="/login" className="hover:underline">
            <span>Login</span>
          </Link>
        </div>
      </div>
      {useReset.state.pending && <LoadingScreen />}
    </div>
  );
};

export default ResetForm;
