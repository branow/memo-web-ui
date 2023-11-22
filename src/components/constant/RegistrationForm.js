import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import FormInputWrapper from "./FormInput/FormInputWrapper";
import UserNameInput from "./FormInput/UsernameInput";
import EmailInput from "./FormInput/EmailInput";
import PasswordInput from "./FormInput/PasswordInput";
import FormSubmitButton from "./FormInput/FormSubmitButton";
import LoadingScreen from "./LoadingScreen";
import ErrorBox from "./ErrorBox";
import { useRegister } from "../../hooks/request/authentication";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { state } = useRegister();

  const handleSubmit = () => {
    const user = {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    state.run(user);
  };

  return (
    <div className="w-[450px] p-[50px]">
      <h2 className="text-[40px] text-white text-center font-semibold">
        Registration
      </h2>

      {state.error && (
        <ErrorBox title="Authentication Error" message={state.error} />
      )}
      <div>
        <FormInputWrapper
          childrenInput={
            <UserNameInput
              onChangeAction={(e) => setUsername(e.target.value)}
            />
          }
          inputIcon={<AiOutlineUser className="mt-[7px]" size="20px" />}
          inputName={"Username"}
        />

        <FormInputWrapper
          childrenInput={
            <EmailInput onChangeAction={(e) => setEmail(e.target.value)} />
          }
          inputIcon={<HiOutlineMail className="mt-[7px]" size="20px" />}
          inputName={"Email"}
        />

        <FormInputWrapper
          childrenInput={
            <PasswordInput
              onChangeAction={(e) => setPassword(e.target.value)}
            />
          }
          inputIcon={<RiLockPasswordLine className="mt-[7px]" size="20px" />}
          inputName={"Password"}
        />

        <FormInputWrapper
          childrenInput={
            <PasswordInput
              onChangeAction={(e) => setConfirmPassword(e.target.value)}
            />
          }
          inputIcon={<RiLockPasswordLine className="mt-[7px]" size="20px" />}
          inputName={"Confirm password"}
        />

        <div className="flex flex-col items-center">
          <FormSubmitButton
            actionName={"Register"}
            onClickAction={handleSubmit}
          />
        </div>

        <div className="text-[1em] text-white text-center font-medium inline">
          <p className="my-[16px]">
            Already have an account?
            <Link
              to="/login"
              className="text-form-link-antiquewhite hover:underline ml-[3px]"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      {state.pending && <LoadingScreen />}
    </div>
  );
};

export default RegistrationForm;
