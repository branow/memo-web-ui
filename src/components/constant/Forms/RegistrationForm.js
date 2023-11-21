import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import EmailInputField from "../FormInput/EmailInputField";
import PasswordInputField from "../FormInput/PasswordInputField";
import UsernameInputField from "../FormInput/UsernameInputField";
import SubmitButton from "../Buttons/SubmitButton";
import LoadingScreen from "../LoadingScreen";
import ErrorBox from "../ErrorBox";
import { useRegister } from "../../../hooks/request/authentication";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { state } = useRegister();

  const handleSubmit = useCallback(() => {
    const user = {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    state.run(user);
  },[]);

  return (
    <div className="w-[450px] p-[50px]">
      <h2 className="text-[40px] text-white text-center font-semibold">
        Registration
      </h2>

      {state.error && (
        <ErrorBox errorTitle="Authentication Error" errorMessage={state.error} />
      )}
      <div>
        <UsernameInputField
          onChangeAction={useCallback((e) => setUsername(e.target.value),[])}
        />
        <EmailInputField onChangeAction={useCallback((e) => setEmail(e.target.value),[])} />
        <PasswordInputField
          onChangeAction={useCallback((e) => setPassword(e.target.value),[])}
          label={"Password"}
        />
        <PasswordInputField
          onChangeAction={useCallback((e) => setConfirmPassword(e.target.value),[])}
          label={"Confirm password"}
        />
        <div className="w-fit m-auto">
        <SubmitButton
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
