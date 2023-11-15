import FormSubmitButton from "./FormInput/FormSubmitButton";
import LoadingScreen from "./LoadingScreen";
import ErrorBox from "./ErrorBox";
import { useLogout } from "../../hooks/request/authentication";

const LogoutForm = ({ setUser }) => {
  const { state } = useLogout(setUser);

  const handleSubmit = () => {
    state.run();
  };

  return (
    <div className="w-[450px] p-[50px]">
      <h2 className="text-[40px] text-white text-center font-semibold">
        Log out
      </h2>

      {state.error && (
        <ErrorBox
          errorTitle="Authentication Error"
          errorMessage={state.error}
        />
      )}

      <FormSubmitButton actionName={"Logout"} onClickAction={handleSubmit} />

      {state.pending && <LoadingScreen />}
    </div>
  );
};

export default LogoutForm;
