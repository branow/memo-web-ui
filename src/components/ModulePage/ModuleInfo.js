import ChangeCircleButton from "../constant/Buttons/ChangeCircleButton";
import DownloadCircleButton from "../constant/Buttons/DownloadCircleButton";
import ScoreWrapper from "../UserPage/PublicUser/ScoreWrapper";
import Avatar from "../constant/Icons/Avatar";
import ModuleAccess from "../constant/Flashcard/ModuleAccess";
import { useContext, useState } from "react";
import { ModuleContext } from "./ModulePage";
import { Link } from "react-router-dom";
import WindowWrapper from "../constant/WindowWrapper";
import ModuleEditForm from "./ModuleEditForm";
import ImportModule from "../ImportWindow/ImportModule";

const ModuleInfo = ({}) => {
  const { moduleState, isAuthenticated, isOwner } = useContext(ModuleContext);
  const [isEdit, setIsEdit] = useState(false);
  const [isImport, setIsImport] = useState(false);

  const module = moduleState.module;
  return (
    <>
      {isEdit && (
        <WindowWrapper close={() => setIsEdit(false)}>
          <ModuleEditForm
            moduleState={moduleState}
            close={() => setIsEdit(false)}
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

      <div className="flex flex-row mt-[6vh] mb-[4vh] mx-[4vw]">
        <div className="w-[35vw] flex flex-col border-r-[4px] border-solid border-white">
          <div className="flex flex-col">
            <div className="text-4xl">
              <span className="font-normal">{module.moduleName}</span>
              {isOwner && (
                <span className="ml-[0.5vw]">
                  <ChangeCircleButton
                    size={"25px"}
                    onClickAction={() => setIsEdit(true)}
                  />
                </span>
              )}
              <span className="pr-[1vw] font-semibold text-main-green float-right">
                {module.collections.length}
              </span>
            </div>
            <div className="flex flex-row mt-[1vh]">
              <ModuleAccess access={module.access} size="25px" />
            </div>
          </div>
          <div className="mt-[5vh]"></div>

          <div className="w-[30vw] text-xl text-gray-300 mr-[1vw] break-words">
            {module.description}
          </div>
        </div>

        <div className="my-auto ml-[6vw] w-[20vw]">
          <ScoreWrapper scores={module.scores} size="BIGGER" />
        </div>
        <div className="mt-[-4vh] mr-[-3vw]">
          <div className="p-[8px] rounded-xl hover:bg-soft-green">
            <Link to={"/profile/" + module.owner.userId}>
              <div className="w-fit m-auto">
                <Avatar size={"75px"} />
              </div>
              <div className="w-fit m-auto text-lg">
                {module.owner.username}
              </div>
            </Link>
          </div>

          <div className="w-fit m-auto">
            {isAuthenticated && !isOwner && (
              <DownloadCircleButton
                size={"50px"}
                onClickAction={() => setIsImport(true)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModuleInfo;
