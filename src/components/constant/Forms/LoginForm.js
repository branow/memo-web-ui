import { Link } from "react-router-dom";
import { useContext, useState, useCallback } from "react";
import EmailInputField from "../FormInput/EmailInputField";
import PasswordInputField from "../FormInput/PasswordInputField";
import SubmitButton from "../Buttons/SubmitButton";
import LoadingScreen from "../LoadingScreen";
import ErrorBox from "../ErrorBox";
import { useLogin } from "../../../hooks/request/authentication";
import { UserContext } from "../../App";

const LoginForm = () => {
  const userState = useContext(UserContext);
  const { state } = useLogin(userState.setUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(() => {
    state.run({
      email: email,
      password: password,
    });
  }, [state, email, password]);

  return (
    <div className="w-[450px] p-[50px]">
      <h2 className="text-[40px] text-white text-center font-semibold">
        Log in
      </h2>

      {state.error && (
        <ErrorBox title="Authentication Error" message={state.error} />
      )}
      <div>
        <EmailInputField
          onChangeAction={useCallback((e) => setEmail(e.target.value),[])}
        />
        <PasswordInputField
          onChangeAction={useCallback((e) => setPassword(e.target.value),[])}
          label={"Password"}
        />

        <div className="m-auto w-fit">
          <SubmitButton actionName={"Login"} onClickAction={handleSubmit} />
        </div>

        <div className="text-[1em] text-white font-medium mt-[45px] mb-[15px] flex justify-between">
          <Link to="/register" className="cursor-pointer hover:underline">
            <span>Create an account?</span>
          </Link>
          <Link to="/reset" className="hover:underline">
            <span>Forgot password?</span>
          </Link>
        </div>
      </div>
      {state.pending && <LoadingScreen />}
    </div>
  );
};

export default LoginForm;
