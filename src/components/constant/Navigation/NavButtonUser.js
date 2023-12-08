import { Link } from "react-router-dom";
import Avatar from "../Icons/Avatar";
import SettingsIcon from "../Icons/SettingsIcon";
import { useContext } from "react";
import { UserContext } from "../../App";
import { readSettings } from "../../../utils/learning-settings";
import { useState } from "react";
import WindowWrapper from "../WindowWrapper";
import Settings from "../../LearningPage/Setting/Settings";

const NavButtonUser = ({ username }) => {
  const [setting, setSetting] = useState(readSettings());
  const [isSetting, setIsSetting] = useState(false);

  const closeSetting = () => {
    setIsSetting(false);
    const curSetting = readSettings();
    if (
      curSetting.audio !== setting.audio ||
      curSetting.sort !== setting.sort ||
      curSetting.levels !== setting.levels
    ) {
      setSetting(curSetting);
    }
  };

  const { userState, state } = useContext(UserContext);
  return (
    <>
      {isSetting && (
        <WindowWrapper close={closeSetting}>
          <Settings close={closeSetting} />
        </WindowWrapper>
      )}
      <div className="border-2 rounded-t-lg">
        <li>
          <div className="relative [&:hover>button.hidden]:block">
            <Link to={"/profile/" + userState.user.userId}>
              <div className="block text-gray-100 hover:bg-orangy-yellow p-3 active:bg-yellow-700">
                <div className="flex flex-row gap-2">
                  <Avatar className="" color="white" size="30px" />
                  {username}
                </div>
              </div>
            </Link>
            <button
              className="hidden absolute w-full h-full bg-tealish-blue text-gray-100 hover:bg-orangy-yellow p-3 active:bg-yellow-700  rounded-b-lg"
              onClick={() => setIsSetting(true)}
            >
              <div className="flex flex-row gap-2">
                <SettingsIcon className="" color="white" size="25px" />
                <span>learning</span>
              </div>
            </button>
          </div>
        </li>
      </div>
    </>
  );
};

export default NavButtonUser;
