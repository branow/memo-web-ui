import StudyTypeDescription from "./StudyTypeDescription";
import CollectionList from "../Collection/CollectionList";
import ScoreWrapper from "../ScoreWrapper";
import DeleteCircleButton from "../../../constant/Buttons/DeleteCircleButton";
import {
  useDeleteModule,
  useGetModuleGeneralDetails,
} from "../../../../hooks/request/module";
import LoadingAnimation from "../../../constant/LoadingAnimation";
import ModuleAccess from "../../../constant/Flashcard/ModuleAccess";
import DownloadCircleButton from "../../../constant/Buttons/DownloadCircleButton";
import { useContext } from "react";
import { PublicUserContext } from "../PublicUserInfo";
import { Link } from "react-router-dom";

const Module = ({ moduleId }) => {
  const { userState, isAuthenticated, isOwner } = useContext(PublicUserContext);
  const { moduleState, state } = useGetModuleGeneralDetails(moduleId);
  const useDelete = useDeleteModule(() => {
    userState.setUser((pr) => {
      pr.moduleIds = pr.moduleIds.filter((e) => e !== moduleId);
      return Object.assign({}, pr);
    });
  });

  const handleOnDelete = () => {
    if (
      window.confirm(
        `Do you really want to delete module: ${module.moduleName}?`
      )
    ) {
      useDelete.state.run(moduleId);
    }
  };

  const module = moduleState.module;
  return (
    <>
      {state.pending && (
        <div className="w-full h-full">
          <LoadingAnimation />
        </div>
      )}
      {module && (
        <div className="relative w-[80vw] h-fit bg-tealish-blue mx-auto mt-[5vh] rounded-sm  border-[2px] border-tealish-blue hover:border-solid hover:border-regent-grey">
          <div className="absolute top-0 right-0">
            {isOwner && (
              <DeleteCircleButton
                color="white"
                size="25px"
                onClickAction={handleOnDelete}
              />
            )}
            {isAuthenticated && !isOwner && (
              <DownloadCircleButton color="white" size="25px" />
            )}
          </div>
          <div className="flex flex-row my-[2vh] mx-[4vw] z-10">
            <div className="w-[40vw] flex flex-col">
              <div className="flex flex-row">
                <ModuleAccess access={module.access} size="25px" />
              </div>
              <div className="flex flex-col">
                <div className="text-3xl ">
                  <Link to={"/module/" + module.moduleId}>
                    <span className="font-normal cursor-pointer">{module.moduleName}</span>
                  </Link>

                  <span className="pr-[1vw] font-semibold text-main-green float-right border-r-[3px] border-solid border-white">
                    {module.collections.length}
                  </span>
                </div>

                <span className="mt-[1vh] text-lg text-gray-300">
                  {module.shortDescription}
                </span>
              </div>
            </div>

            <div className="ml-[7vw] mt-[3vh] z-10">
              <ScoreWrapper scores={module.scores} />
            </div>
          </div>
          <div className="relative z-10 border-y-[3px] border-solid border-white">
            {isOwner && (
              <StudyTypeDescription
                memoDestination={"#"}
                writingDestination={"#"}
              />
            )}
          </div>

          <div className="flex flex-row flex-wrap justify-between mt-[2vh] z-10">
            <CollectionList collections={module.collections} />
          </div>
        </div>
      )}
    </>
  );
};

export default Module;
