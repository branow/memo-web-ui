import { useHistory } from "react-router-dom";
import WindowWrapper from "../../constant/WindowWrapper";
import Settings from "./Settings";

const SettingsWindow = () => {
  const history = useHistory();

  const close = () => {
    history.goBack();
  }

  return (
    <WindowWrapper close={close}>
      <Settings close={close} />
    </WindowWrapper>
  );
};

export default SettingsWindow;
