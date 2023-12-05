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

const ModuleInfo = ({}) => {
  const { moduleState, isAuthenticated, isOwner } = useContext(ModuleContext);
  const [isEdit, setIsEdit] = useState(false);

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

      <div className="flex flex-row mt-[6vh] mb-[4vh] mx-[4vw] z-10">
        <div className="w-[45vw] flex flex-col">
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
                <span className="pr-[1vw] font-semibold text-main-green float-right border-r-[4px] border-solid border-white">
                  {module.collections.length}
                </span>
              </div>
              <div className="flex flex-row mt-[1vh]">
                <ModuleAccess access={module.access} size="25px" />
              </div>
            </div>
            <div className="mt-[5vh]"></div>
            <div className="w-[70vw]">
              <div className="text-xl text-gray-300 mr-[1vw] w-full">
                {module.description}
              </div>
            </div>
        </div>

        <div className="mt-[-2vh] ml-[5vw] z-10">
          <ScoreWrapper scores={module.scores} />
        </div>
        <div className="absolute top-0 right-0 mt-[2vh] mr-[2vw]">
          <Link to={"/profile/" + module.owner.userId}>
            <Avatar size={"75px"} />
            <div className="w-fit m-auto text-lg">{module.owner.username}</div>
          </Link>

          <div className="w-fit m-auto">
            {!isOwner && <DownloadCircleButton size={"50px"} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModuleInfo;
