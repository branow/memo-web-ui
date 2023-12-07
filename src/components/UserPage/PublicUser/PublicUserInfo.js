import { useParams } from "react-router-dom";
import TabButton from "./TabButton";
import { createContext, useContext, useState } from "react";
import { UserContext } from "../../App";
import LoadingScreen from "../../constant/LoadingScreen";
import { useGetUserGeneralDetails } from "../../../hooks/request/user";
import ErrorPage from "../../constant/ErrorPage";
import UserInfo from "./UserInfo";
import PublicUserModules from "./PublicUserModules";
import PublicUserAchievements from "./PublicUserAchievements";

export const PublicUserContext = createContext();

const PublicUserInfo = () => {
  const appUserContext = useContext(UserContext);
  const { userId } = useParams();
  const { userState, state } = useGetUserGeneralDetails(userId);
  const isAuthenticated = appUserContext.userState.user ? true : false;
  const isOwner =
    isAuthenticated &&
    userState.user &&
    appUserContext.userState.user.userId === userState.user.userId;

  const [tab, setTab] = useState("modules");

  return (
    <>
      {(appUserContext.state.pending || state.pending) && <LoadingScreen />}
      {state.error && (
        <ErrorPage title="User Loading Error" message={state.error} />
      )}

      <PublicUserContext.Provider
        value={{ userState, isAuthenticated, isOwner }}
      >
        {userState.user && (
          <div className="relative w-screen h-full pb-[50px] bg-dark-grey text-white">
            <UserInfo />
            <div className="w-[65vw] m-auto h-fit flex flex-row text-xl font-normal pt-[5vh]">
              <TabButton
                name={"Modules"}
                active={tab === "modules"}
                onClickAction={() => setTab("modules")}
              />
              <TabButton
                name={"Achievements"}
                active={tab === "achievements"}
                onClickAction={() => setTab("achievements")}
              />
            </div>
            <div className="p-[20px]">
              {tab === "modules" && <PublicUserModules />}
              {tab === "achievements" && <PublicUserAchievements />}
            </div>
          </div>
        )}
      </PublicUserContext.Provider>
    </>
  );
};

export default PublicUserInfo;
