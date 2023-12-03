import Avatar from "../../constant/Icons/Avatar";
import { Link, useParams } from "react-router-dom";
import SearchBar from "../../constant/SearchBar";
import TabButton from "./TabButton";
import ModuleList from "./Module/ModuleList";
import EmptyModules from "./Module/EmptyModules";
import { useContext } from "react";
import { UserContext } from "../../App";
import LoadingScreen from "../../constant/LoadingScreen";
import { useGetUserGeneralDetails } from "../../../hooks/request/user";
import ErrorBox from "../../constant/ErrorBox";

const PublicUserInfo = ({ tab }) => {
  const appUserContext = useContext(UserContext);
  const { userId } = useParams();
  const { userState, state } = useGetUserGeneralDetails(userId);
  const thisUser =
    appUserContext.userState.user &&
    appUserContext.userState.user.userId === parseInt(userId);
  const user = userState.user;

  const setModuleIds = (update) => {
    userState.setUser((p) => {
      p.moduleIds = update(p.moduleIds);
      return Object.assign({}, p);
    });
  } 

  return (
    <>
      {(appUserContext.state.pending || state.pending) && <LoadingScreen />}

      {state.error && (
        <ErrorBox title="Database Connection Error" message={state.error} />
      )}

      <div className="relative w-screen h-fit pb-[50px] bg-dark-grey text-white">
        <div className="flex h-[vh] w-screen">
          <div className="text-3xl font-medium ml-[12vw] pt-[5vh] w-fit h-fit flex">
            {thisUser && (
              <div className="cursor-pointer">
                <Link to={"/profile/info"}>
                  <Avatar className="mx-auto" color="white" size="100px" />
                </Link>
              </div>
            )}
            {!thisUser && (
              <Avatar className="mx-auto" color="white" size="100px" />
            )}

            {user && (
              <div className="flex flex-col ml-[2vw] my-auto">
                <span>{user.username}</span>
                <span className="mt-[1vh] text-lg w-full">{user.description}</span>
              </div>
            )}
          </div>
        </div>

        <div className="w-screen h-fit flex flex-row text-xl font-normal pt-[5vh]">
          <TabButton
            destination={"modules"}
            name={"Modules"}
            active={tab === "modules" && true}
          />
          <TabButton
            destination={"achievements"}
            name={"Achievements"}
            active={tab === "achievements" && true}
          />
        </div>

        <div className="p-[20px]">
          {tab === "modules" ? (
            <>
              <div className="w-[40%] min-w-[500px]">
                <SearchBar />
              </div>

              {user &&
                (user.moduleIds ? (
                  <ModuleList thisUser={thisUser} moduleIds={user.moduleIds} setModuleIds={setModuleIds}/>
                ) : (
                  <EmptyModules thisUser={thisUser} />
                ))}
            </>
          ) : (
            "There are no achievements yet("
          )}
        </div>
      </div>
    </>
  );
};

export default PublicUserInfo;
