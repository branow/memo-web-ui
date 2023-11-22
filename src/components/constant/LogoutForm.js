import FormSubmitButton from "./FormInput/FormSubmitButton";
import LoadingScreen from "./LoadingScreen";
import ErrorBox from "./ErrorBox";
import { useLogout } from "../../hooks/request/authentication";
import { useContext } from "react";
import { UserContext } from "../App";

const LogoutForm = () => {
  const userState = useContext(UserContext);
  const { state } = useLogout(userState.setUser);

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
          title="Authentication Error"
          message={state.error}
        />
      )}

      <FormSubmitButton actionName={"Logout"} onClickAction={handleSubmit} />

      {state.pending && <LoadingScreen />}
    </div>
  );
};

export default LogoutForm;
