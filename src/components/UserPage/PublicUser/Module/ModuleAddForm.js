import { useState } from "react";
import { useSaveModule } from "../../../../hooks/request/module";
import SubmitButton from "../../../constant/Buttons/SubmitButton";
import LoadingAnimation from "../../../constant/LoadingAnimation";
import ErrorBox from "../../../constant/ErrorBox";
import DeleteCircleButton from "../../../constant/Buttons/DeleteCircleButton";
import GeneralInputField from "../../../constant/FormInput/GeneralInputField";
import AccessSelect from "../../../constant/FormInput/AccessSelect";
import TextArea from "../../../constant/FormInput/TextArea";


const ModuleAddForm = ({ setModule, close }) => {
  const [moduleName, setModuleName] = useState("My New Module");
  const [access, setAccess] = useState("PUBLIC");
  const [description, setDescription] = useState("");
  const useSave = useSaveModule(setModule);

  const handleOnAdd = () => {
    const module = {
      moduleName: moduleName,
      access: access,
      description: description
    }
    useSave.state.run(module);
  };

  return (
    <div className="relative min-w-[500px] w-[35vw] flex flex-col items-center p-[20px] rounded-xl bg-dark-grey">
      {useSave.state.pending && <LoadingAnimation message="Adding..." />}
      {useSave.state.error && (
        <ErrorBox
          title="Module Adding Error"
          message={useSave.state.error}
          close={useSave.state.cleanError}
        />
      )}

      <div className="absolute top-0 right-0">
        <DeleteCircleButton size="25px" onClickAction={close} />
      </div>
      <div className="my-[4vh] text-4xl font-semibold">Add module</div>
      <div className="flex flex-col items-center text-black">
        <div className="w-[20vw] flex flex-col items-center">
          <label className="block text-xl mb-[-2vh] font-medium text-gray-200">
            Module Name
          </label>
          <GeneralInputField
            onChangeAction={(e) => setModuleName(e.target.value)}
            value={moduleName}
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
          <SubmitButton actionName="Add" onClickAction={handleOnAdd} />
        </div>
      </div>
    </div>
  );
};

export default ModuleAddForm;
