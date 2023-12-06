import { Link } from "react-router-dom";
import Module from "./Module";
import AddButton from "../../../constant/Buttons/AddButton";
import { useContext, useState } from "react";
import { PublicUserContext } from "../PublicUserInfo";
import FixedAddButton from "../../../constant/Buttons/FixedAddButton";
import EmptyModules from "./EmptyModules";
import { useSaveModule } from "../../../../hooks/request/module";
import WindowWrapper from "../../../constant/WindowWrapper";
import ModuleAddForm from "./ModuleAddFrom";

const ModuleList = () => {
  const { userState, isAuthenticated, isOwner} = useContext(PublicUserContext)
  const [isAdding, setIsAdding] = useState(false);

  const moduleIds = userState.user.moduleIds;
  return (
    <> 
      {isAdding && (
        <WindowWrapper close={() => setIsAdding(false)}>
          <ModuleAddForm userState={userState} close={() => setIsAdding(false)}/>
        </WindowWrapper>
      )}

      {moduleIds.length === 0 && <EmptyModules />}
      {moduleIds.map((moduleId) => (
        <div key={moduleId}>
          <Module moduleId={moduleId}/>
        </div>
      ))}
      {isOwner && (
        <div className="mr-[2vw]">
          <FixedAddButton onClickAction={() => setIsAdding(true)}/>
        </div>
      )}
    </>
  );
};

export default ModuleList;
