import { Link } from "react-router-dom";
import Avatar from "../Icons/Avatar";
import SettingsIcon from "../Icons/SettingsIcon";
import { useContext } from "react";
import { UserContext } from "../../App";
import { readSettings } from "../../../utils/learning-settings";
import { useState } from "react";
import WindowWrapper from "../WindowWrapper";
import Settings from "../../LearningPage/Setting/Settings";

const NavButtonUser = () => {
  const { userState, state } = useContext(UserContext);
  const user = userState.user;
  return (
    <>
      <div className="border-2 rounded-t-lg">
        <div className="relative [&:hover>button.hidden]:block">
          <Link to={"/profile/" + user.userId}>
            <div className="block text-gray-100 hover:bg-orangy-yellow p-3 active:bg-yellow-700">
              <div className="flex flex-row gap-2">
                <Avatar className="" color="white" size="30px" />
                {user.username}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavButtonUser;
