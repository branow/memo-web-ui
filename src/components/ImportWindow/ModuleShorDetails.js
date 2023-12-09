import ModuleAccess from "../constant/Flashcard/ModuleAccess";
import { ImportCollectionContext } from "./ImportCollection";
import { useContext } from "react";

const ModuleShortDetails = ({ module }) => {
  const { collectionId, useImport } = useContext(ImportCollectionContext);

  const onImport = () => {
    const targetModuleId = module.moduleId;
    useImport.state.run({ collectionId, targetModuleId });
  };

  return (
    <>
      <div
        className="flex flex-col p-[10px] bg-charcoal hover:bg-glassy-green cursor-pointer"
        onClick={onImport}
      >
        <div className="flex justify-between">
          <div className="p-[5px] text-main-green text-xl font-semibold">
            {module.moduleName}
          </div>
          <div className="p-[5px]">
            <ModuleAccess access={module.access} size="25px" />
          </div>
        </div>
        <div className="text-base font-thin">{module.shortDescription}...</div>
      </div>
    </>
  );
};

export default ModuleShortDetails;
