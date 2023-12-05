import { useState } from "react";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import SubmitButton from "../constant/Buttons/SubmitButton";
import { useSaveModule } from "../../hooks/request/module";
import LoadingAnimation from "../constant/LoadingAnimation";
import ErrorBox from "../constant/ErrorBox";

const ModuleEditForm = ({ moduleState, close }) => {
  const [moduleName, setModuleName] = useState(moduleState.module.moduleName);
  const [access, setAccess] = useState(moduleState.module.access);
  const [description, setDescription] = useState(
    moduleState.module.description
  );
  const useSave = useSaveModule(() => {
    moduleState.setModule((pr) => {
      pr.moduleName = moduleName;
      pr.access = access;
      pr.description = description;
      return Object.assign({}, pr);
    });
  });

  const handleOnSave = () => {
    const module = {
      moduleId: moduleState.module.moduleId,
      moduleName: moduleName,
      access: access,
      description: description
    }
    useSave.state.run(module);
  };

  return (
    <div className="relative flex flex-col justify-center bg-tealish-blue p-[20px]">
      {useSave.state.pending && <LoadingAnimation message="Saving..." />}
      {useSave.state.error && (
        <ErrorBox
          title="Module Save Error"
          message={useSave.state.error}
          close={useSave.state.cleanError}
        />
      )}

      <div className="absolute top-0 right-0">
        <DeleteCircleButton size="25px" onClickAction={close} />
      </div>
      <div>Edit module</div>
      <div className="flex flex-col justify-center text-black">
        <div>
          <div>Module Name</div>
          <input
            type="text"
            defaultValue={moduleName}
            onChange={(e) => setModuleName(e.target.value)}
          />
        </div>
        <div>
          <div>Access</div>
          <select
            defaultValue={access}
            onChange={(e) => setAccess(e.target.value)}
          >
            <option value="PUBLIC">PUBLIC</option>
            <option value="PRIVATE">PRIVATE</option>
          </select>
        </div>
        <div>
          <div>Description</div>
          <textarea
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <SubmitButton actionName="Save" onClickAction={handleOnSave} />
        </div>
      </div>
    </div>
  );
};

export default ModuleEditForm;
