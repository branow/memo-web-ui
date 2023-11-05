import { Link, useHistory } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import FormInputWrapper from "./FormInput/FormInputWrapper";
import UserNameInput from "./FormInput/UsernameInput";
import EmailInput from "./FormInput/EmailInput";
import PasswordInput from "./FormInput/PasswordInput";
import FormSubmitButton from "./FormInput/FormSubmitButton";
import register from "../../service/authentication/register";
import LoadingScreen from "./LoadingScreen";
import { State } from "../../service/service";
import ErrorBox from "./ErrorBox";

const RegistrationForm = () => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    const user = {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    const doSuccess = (response) => {
      history.push("/");
    };
    register(user, new State(setPending, setError, doSuccess));
  };

  return (
    <div className="w-[450px] p-[50px]">
      <h2 className="text-[40px] text-white text-center font-semibold">
        Registration
      </h2>

      <form>
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
            <EmailInput
              onChangeAction={(e) => setEmail(e.target.value)}
            />
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

        <FormSubmitButton
          actionName={"Register"}
          onClickAction={handleSubmit}
        />

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
      </form>
      {pending && <LoadingScreen />}
    </div>
  );
};

export default RegistrationForm;
