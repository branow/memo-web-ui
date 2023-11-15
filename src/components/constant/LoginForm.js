import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import EmailInputField from "./FormInput/EmailInputField";
import PasswordInputField from "./FormInput/PasswordInputField";
import FormSubmitButton from "./SubmitButton";
import LoadingScreen from "./LoadingScreen";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import login from "../../service/authentication/login";
import { State } from "../../service/service";
import ErrorBox from "./ErrorBox";
import DoFinally from "../../util/do-finally";

const LoginForm =({ setUser }) => {
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  
  const handleSubmit = useCallback(() => {
    const user = {
      email: email,
      password: password,
    };
    const doFinally = new DoFinally();
    doFinally.success.addAfter(() =>  history.push("/"));
    login(user, setUser, new State(setPending, setError), doFinally);
  },[]);

  return (
    <div className="w-[450px] p-[50px]">
      <h2 className="text-[40px] text-white text-center font-semibold">
        Log in
      </h2>

      {error && (
        <ErrorBox errorTitle="Authentication Error" errorMessage={error} />
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
          <FormSubmitButton actionName={"Login"} onClickAction={handleSubmit} />
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
      {pending && <LoadingScreen />}
    </div>
  );
};

export default LoginForm;
