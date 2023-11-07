import { HiOutlineMail } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { State } from "../../service/service";
import FormInputWrapper from "./FormInput/FormInputWrapper";
import EmailInput from "./FormInput/EmailInput";
import FormSubmitButton from "./FormInput/FormSubmitButton";
import LoadingScreen from "./LoadingScreen";
import ErrorBox from "./ErrorBox";
import regenerateToken from "../../service/authentication/regenerate-token";
import DoFinally from "../../util/do-finally";
import enable from "../../service/authentication/enable";

const ConfirmForm = ({ setUser }) => {
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);
  const [email, setEmail] = useState("");
  const history = useHistory();
  const token = new URLSearchParams(window.location.search).get("token");

  useEffect(() => {
    if (token) {
      const doFinally = new DoFinally();
      doFinally.success.addAfter(() => history.push("/"));
      enable(token, setUser, new State(setPending, setError), doFinally);
    }
  }, []);


  const handleSubmit = () => {
    const doFinally = new DoFinally();
    doFinally.success.addAfter(() => history.push("/"));
    regenerateToken(email, token, new State(setPending, setError), doFinally);
  };

  return (
    <div className="w-[450px] p-[50px]">
      <h2 className="text-[40px] text-white text-center font-semibold">
        Send email
      </h2>
      <h2 className="text-[16px] my-[20px] text-white text-center font-medium">
        Registration confirmation timed out, send your email again
      </h2>
      {error && <ErrorBox errorTitle="Email Error" errorMessage={error} />}
      <div>
        <FormInputWrapper
          childrenInput={
            <EmailInput onChangeAction={(e) => setEmail(e.target.value)} />
          }
          inputIcon={<HiOutlineMail className="mt-[7px]" size="20px" />}
          inputName={"Email"}
        />
        <FormSubmitButton actionName={"Send"} onClickAction={handleSubmit} />
      </div>
      {pending && <LoadingScreen />}
    </div>
  );
};

export default ConfirmForm;
