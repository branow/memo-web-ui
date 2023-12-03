import { useState } from "react";
import EditorMenuButton from "./EditorMenuButton";
import { MdAutoMode } from "react-icons/md";
import WindowWrapper from "../constant/WindowWrapper";
import AutoBuilder from "../WebSearch/AutoBuilder";

const EditorMenu = ({ defaultQuery, setFront, setBack }) => {
  const [isBuild, setIsBuild] = useState(false);

  const handleOnBuild = () => {

  }

  const closeBuilder = () => {
    setIsBuild(false);
  }

  return (
    <>
      <div className="bg-dark-grey flex items-center justify-start">
        <EditorMenuButton icon={<MdAutoMode size="20px" color="white"/>} label="AutoBuild" onClickAction={() => setIsBuild(true)}/>
      </div>  

      {isBuild && (
        <WindowWrapper close={closeBuilder}>
          <AutoBuilder defaultQuery={defaultQuery} setFront={setFront} setBack={setBack} close={closeBuilder}/>
        </WindowWrapper>
      )}
    </>
  );
};

export default EditorMenu;
