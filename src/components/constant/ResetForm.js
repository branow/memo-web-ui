import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";
import FormInputWrapper from "./FormInput/FormInputWrapper";
import EmailInput from "./FormInput/EmailInput";
import FormSubmitButton from "./FormInput/FormSubmitButton";
import LoadingScreen from "./LoadingScreen";
import ErrorBox from "./ErrorBox";
import { useNewPasswordEmail } from "../../hooks/request/email";
import { generate } from "../../utils/password-generator";

const ResetForm = () => {
  const { state } = useNewPasswordEmail(generate());
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    state.run(email);
  };

  return (
    <div className="w-[450px] p-[50px]">
      <h2 className="text-[40px] text-white text-center font-semibold">
        Reset password
      </h2>
      <h2 className="text-[16px] my-[20px] text-white text-center font-medium">
        Type your email to send verification letter
      </h2>

      {state.error && (<ErrorBox title="Email Sending Error" message={state.error}/>)}

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

        <div className="text-[1em] text-white font-medium mt-[45px] mb-[15px] flex justify-between">
          <Link to="/register" className="cursor-pointer hover:underline">
            <span>Create an account?</span>
          </Link>
          <Link to="/login" className="hover:underline">
            <span>Login</span>
          </Link>
        </div>
      </div>
      {state.pending && <LoadingScreen />}
    </div>
  );
};

export default ResetForm;
