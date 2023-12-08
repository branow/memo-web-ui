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
        <div className="[&:hover>div.hidden]:block relative w-[60vw] h-fit bg-tealish-blue mx-auto mt-[5vh] mb-[7vh] py-[2vh] rounded-sm  border-[2px] border-tealish-blue hover:border-solid hover:border-regent-grey">
          <div className="hidden absolute top-0 right-0">
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
            <div className="w-[33vw] flex flex-col pr-[1vw] border-r-[4px] border-solid border-white">
              <div className="flex flex-row">
                <ModuleAccess access={module.access} size="25px" />
              </div>
              <div className="flex flex-col">
                <div className="text-3xl ">
                  <Link to={"/module/" + module.moduleId}>
                    <span className="font-normal cursor-pointer hover:underline hover:decoration-2">
                      {module.moduleName}
                    </span>
                  </Link>

                  <div className="w-[] font-semibold text-main-green float-right">
                    {module.collections.length}
                  </div>
                </div>
              </div>
              <div className="w-[30vw] mt-[1vh] text-lg text-gray-300 pr-[1vw]">
                {module.shortDescription}
              </div>
            </div>

            <div className="my-auto ml-[6vw]">
              <ScoreWrapper scores={module.scores} size="SMALLER" />
            </div>
          </div>
          {isOwner && (
            <div className="relative z-10 border-y-[3px] border-solid border-white">
              <StudyTypeDescription
                collections={module.collections.map((c) => c.collectionId)}
              />
            </div>
          )}
          <div className="flex flex-row flex-wrap justify-between mt-[2vh] z-10">
            <CollectionList collections={module.collections} />
          </div>
        </div>
      )}
    </>
  );
};

export default Module;
