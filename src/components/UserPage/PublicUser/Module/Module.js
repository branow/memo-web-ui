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
import { useContext, useState } from "react";
import { PublicUserContext } from "../PublicUserInfo";
import { Link } from "react-router-dom";
import WindowWrapper from "../../../constant/WindowWrapper";
import ImportModule from "../../../ImportWindow/ImportModule";
import ConfirmBox from "../../../constant/ConfirmBox";

const Module = ({ moduleId }) => {
  const [toDelete, setToDelete] = useState(false);
  const { userState, isAuthenticated, isOwner } = useContext(PublicUserContext);
  const { moduleState, state } = useGetModuleGeneralDetails(moduleId);
  const useDelete = useDeleteModule(() => {
    userState.setUser((pr) => {
      pr.moduleIds = pr.moduleIds.filter((e) => e !== moduleId);
      return Object.assign({}, pr);
    });
  });
  const [isImport, setIsImport] = useState(false);

  // const handleOnDelete = () => {
  //   if (
  //     window.confirm(
  //       `Do you really want to delete module: ${module.moduleName}?`
  //     )
  //   ) {
  //     useDelete.state.run(moduleId);
  //   }
  // };
  const handleOnDelete = (isToDelete) => {
    if(isToDelete) useDelete.state.run(moduleId);
    else setToDelete(false);
      
  };

  const module = moduleState.module;
  return (
    <>
      {toDelete && (
        <WindowWrapper close={() => handleOnDelete(false)}>
          <ConfirmBox
            text={`Do you really want to delete module: ${module.moduleName}?`}
            handleOnDelete={handleOnDelete}
          />
        </WindowWrapper>
      )}
      {isImport && (
        <WindowWrapper close={() => setIsImport(false)}>
          <ImportModule
            moduleId={module.moduleId}
            close={() => setIsImport(false)}
          />
        </WindowWrapper>
      )}
      {state.pending && (
        <div className="w-full h-full">
          <LoadingAnimation />
        </div>
      )}
      {module && (
        <div
          className="[&:hover>div.hidden]:block relative w-[60vw] min-w-[400px] h-fit py-[10px] px-[30px] bg-tealish-blue mx-auto
        rounded-sm border-[2px] border-tealish-blue hover:border-solid hover:border-regent-grey"
        >
          <div className="hidden absolute top-0 right-0">
            {isOwner && (
              <DeleteCircleButton
                color="white"
                size="25px"
                onClickAction={() => setToDelete(true)}
              />
            )}
            {isAuthenticated && !isOwner && (
              <DownloadCircleButton
                color="white"
                size="40px"
                onClickAction={() => setIsImport(true)}
              />
            )}
          </div>
          <div className="flex flex-row z-10 items-center p-[10px]">
            <div className="flex flex-col w-[60%]">
              <div className="border-r-[4px] p-[10px] border-solid border-white">
                <div className="flex flex-row">
                  <ModuleAccess access={module.access} size="25px" />
                </div>
                <div className="flex justify-between text-3xl gap-[20px]">
                  <Link to={"/module/" + module.moduleId}>
                    <span className="font-normal cursor-pointer hover:underline hover:decoration-2">
                      {module.moduleName}
                    </span>
                  </Link>
                  <div className="font-semibold text-main-green">
                    {module.collections.length}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-[20px]">
              <ScoreWrapper scores={module.scores} size="SMALLER" />
            </div>
          </div>
          <div className="p-[10px] text-lg text-gray-300 break-words font-light">
            {module.shortDescription}...
          </div>
          {isOwner && (
            <div className="relative z-10 border-y-[3px] border-solid border-white">
              <StudyTypeDescription
                collections={module.collections.map((c) => c.collectionId)}
              />
            </div>
          )}
          <div className="p-[20px] grid grid-cols-3 justify-evenly gap-[30px] z-10">
            <CollectionList collections={module.collections} />
          </div>
        </div>
      )}
    </>
  );
};

export default Module;
