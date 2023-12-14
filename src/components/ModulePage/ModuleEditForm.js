import { useState } from "react";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import SubmitButton from "../constant/Buttons/SubmitButton";
import { useSaveModule } from "../../hooks/request/module";
import LoadingAnimation from "../constant/LoadingAnimation";
import ErrorBox from "../constant/ErrorBox";
import GeneralInputField from "../constant/FormInput/GeneralInputField";
import AccessSelect from "../constant/FormInput/AccessSelect";
import TextArea from "../constant/FormInput/TextArea";


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
    close();
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
    <div className="relative min-w-[500px] w-[35vw] flex flex-col items-center p-[20px] rounded-xl bg-dark-grey">
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
      <div className="my-[4vh] text-4xl font-semibold">Edit module</div>
      <div className="flex flex-col items-center text-black">
        <div className="w-[20vw] flex flex-col items-center">
          <label className="block mb-[-2vh] text-xl font-medium text-gray-200">
            Module Name
          </label>
          <GeneralInputField 
          value={moduleName}
          onChangeAction={(e) => setModuleName(e.target.value)}
          />
        </div>
        <div className="w-[20vw] mt-[1vh] flex flex-col items-center">
          <label className="block mb-2 text-xl font-medium text-gray-200">
            Access
          </label>
          <AccessSelect 
          value={access}
          onChangeAction={(e) => setAccess(e.target.value)}
          />
        </div>
        <div className="w-[20vw] min-h-[20vh] mt-[2vh] flex flex-col items-center">
          <label className="block mb-3 text-xl font-medium text-gray-200">
            Description
          </label>
          <TextArea 
          value={description}
          onChangeAction={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="my-[3vh]">
          <SubmitButton actionName="Save" onClickAction={handleOnSave} />
        </div>
      </div>
    </div>
  );
};

export default ModuleEditForm;
