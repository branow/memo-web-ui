import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import login from "../../service/authentication/login";
import { State } from "../../service/service";
import FormInputWrapper from "./FormInput/FormInputWrapper";
import EmailInput from "./FormInput/EmailInput";
import FormSubmitButton from "./FormInput/FormSubmitButton";
import LoadingScreen from "./LoadingScreen";
import ErrorBox from "./ErrorBox";

const ConfirmForm = () => {
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);
  const [email, setEmail] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    const user = {
      email: email,
    };
    const doSuccess = () => {
      history.push("/");
    };
    login(user, new State(setPending, setError), doSuccess);
  };

  return (
    <div className="w-[450px] p-[50px]">
      <h2 className="text-[40px] text-white text-center font-semibold">
        Send email
      </h2>
      <h2 className="text-[16px] my-[20px] text-white text-center font-medium">
        Registration confirmation timed out, send your email again
      </h2>

      <form>
        <FormInputWrapper
          childrenInput={
            <EmailInput onChangeAction={(e) => setEmail(e.target.value)} />
          }
          inputIcon={<HiOutlineMail className="mt-[7px]" size="20px" />}
          inputName={"Email"}
        />
        <FormSubmitButton actionName={"Send"} onClickAction={handleSubmit} />
      </form>
      {pending && <LoadingScreen />}
    </div>
  );
};

export default ConfirmForm;
