import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import FormInputWrapper from "./FormInput/FormInputWrapper";
import EmailInput from "./FormInput/EmailInput";
import PasswordInput from "./FormInput/PasswordInput";
import FormSubmitButton from "./FormInput/FormSubmitButton";
import LoadingScreen from "./LoadingScreen";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import login from "../../service/authentication/login";
import { State } from "../../service/service";
import ErrorBox from "./ErrorBox";

const LoginForm = ({ setUser }) => {
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    const user = {
      email: email,
      password: password,
    };
    const doSuccess = () => {
      history.push("/");
    };
    login(user, setUser, new State(setPending, setError), doSuccess);
  };

  return (
    <div className="w-[450px] p-[50px]">
      <h2 className="text-[40px] text-white text-center font-semibold">
        Log in
      </h2>

      {/* <ErrorBox errorTitle={"AbobaError"} errorMessage={"AbobaErrorMessagffffffffffffffffffff dddddddd dddddddddddddd dddddddddfffffffffffff ffffffffffffffffffffffffe"}/> */}
      <form>
        <FormInputWrapper
          childrenInput={
            <EmailInput onChangeAction={(e) => setEmail(e.target.value)} />
          }
          inputName={"Email"}
          inputIcon={<HiOutlineMail className="mt-[7px]" size="20px" />}
        />

        <FormInputWrapper
          childrenInput={
            <PasswordInput
              onChangeAction={(e) => setPassword(e.target.value)}
            />
          }
          inputName={"Password"}
          inputIcon={<RiLockPasswordLine className="mt-[7px]" size="20px" />}
        />

        <FormSubmitButton actionName={"Login"} onClickAction={handleSubmit} />

        <div className="text-[1em] text-white font-medium mt-[45px] mb-[15px] flex justify-between">
          <Link to="/register" className="cursor-pointer hover:underline">
            <span>Create an account?</span>
          </Link>
          <Link to="/reset" className="hover:underline">
            <span>Forgot password?</span>
          </Link>
        </div>
      </form>
      {pending && <LoadingScreen />}
    </div>
  );
};

export default LoginForm;