import { useParams } from "react-router-dom";
import ModuleInfo from "./ModuleInfo";
import StudyTypeDescription from "../UserPage/PublicUser/Module/StudyTypeDescription";
import SearchBar from "../constant/SearchBar";
import ModuleCollectionList from "./ModuleCollectionList";
import { useGetModuleDetails } from "../../hooks/request/module";
import { createContext, useContext } from "react";
import { UserContext } from "../App";
import LoadingAnimation from "../constant/LoadingAnimation";
import ErrorPage from "../constant/ErrorPage";

export const ModuleContext = createContext();

const ModulePage = ({ currentModule }) => {
  currentModule = module;
  const appUserContext = useContext(UserContext);
  const { moduleId } = useParams();
  const { moduleState, state } = useGetModuleDetails(moduleId);
  const isAuthenticated = appUserContext.userState.user ? true : false;
  const isOwner =
    isAuthenticated &&
    moduleState.module &&
    appUserContext.userState.user.userId === moduleState.module.owner.userId;

  return (
    <>
      {state.pending && <LoadingAnimation />}
      {state.error && (
        <ErrorPage title="Module Loading Error" message={state.error} />
      )}

      <ModuleContext.Provider value={{ moduleState, isAuthenticated, isOwner }}>
        <div className="relative w-screen h-screen bg-dark-grey text-white">
          <div
            className="relative h-fit w-[70vw] pb-[5vh] bg-tealish-blue mx-auto border-[2px] 
      border-tealish-blue hover:border-solid 
      hover:border-regent-grey"
          >
            {moduleState.module && (
              <>
                <ModuleInfo />
                {isOwner && (
                  <div className="relative z-10 border-solid border-white border-y-[3px]">
                    <StudyTypeDescription
                      collections={moduleState.module.collections.map(
                        (c) => c.collectionId
                      )}
                    />
                  </div>
                )}
                {!isOwner && (
                  <div className="border-solid border-white border-b-[3px]"></div>
                )}
                {moduleState.module.collections.length !== 0 && (
                  <div className="w-[30vw] h-[5vh] mt-[5vh] ml-[6.2vw]">
                    <SearchBar borderColor={"charcoal"} />
                  </div>
                )}

                <div className="flex-wrap justify-between mt-[7vh] z-10">
                  <ModuleCollectionList />
                </div>
              </>
            )}
          </div>
        </div>
      </ModuleContext.Provider>
    </>
  );
};

export default ModulePage;
