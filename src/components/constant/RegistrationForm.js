import { Link, useHistory } from "react-router-dom";
import { useState, useCallback } from "react";
import UsernameInputField from "./FormInput/UsernameInputField";
import EmailInputField from "./FormInput/EmailInputField";
import PasswordInputField from "./FormInput/PasswordInputField";
import FormSubmitButton from "./SubmitButton";
import register from "../../service/authentication/register";
import LoadingScreen from "./LoadingScreen";
import { State } from "../../service/service";
import ErrorBox from "./ErrorBox";
import DoFinally from "../../util/do-finally";

const RegistrationForm = () => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  const handleSubmit = useCallback(() => {
    const user = {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    const doFinally = new DoFinally();
    doFinally.success.addAfter(() => history.push("/"));
    register(user, new State(setPending, setError), doFinally);
  },[]);

  return (
    <div className="w-[450px] p-[50px]">
      <h2 className="text-[40px] text-white text-center font-semibold">
        Registration
      </h2>

      {error && (
        <ErrorBox errorTitle="Authentication Error" errorMessage={error} />
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
      {pending && <LoadingScreen />}
    </div>
  );
};

export default RegistrationForm;
