import DeleteButton from "../Buttons/DeleteButton";
import LoadingScreen from "../LoadingScreen";
import ErrorBox from "../ErrorBox";
import { useLogout } from "../../../hooks/request/authentication";
import { useContext } from "react";
import { UserContext } from "../../App";

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
          errorTitle="Authentication Error"
          errorMessage={state.error}
        />
      )}

      <div className="w-fit m-auto mt-[2vh]">
        <DeleteButton actionName={"Logout"} onClickAction={handleSubmit} />
      </div>

      {state.pending && <LoadingScreen />}
    </div>
  );
};

export default LogoutForm;
