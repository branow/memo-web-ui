import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSaveModule } from "../../../../hooks/request/module";
import SubmitButton from "../../../constant/Buttons/SubmitButton";
import LoadingAnimation from "../../../constant/LoadingAnimation";
import ErrorBox from "../../../constant/ErrorBox";
import DeleteCircleButton from "../../../constant/Buttons/DeleteCircleButton";

const ModuleAddForm = ({ userState, close }) => {
  const history = useHistory();
  const [moduleName, setModuleName] = useState("My New Module");
  const [access, setAccess] = useState("PUBLIC");
  const [description, setDescription] = useState("");
  const useSave = useSaveModule((savedModule) => {
    userState.setUser((pr) => {
      pr.moduleIds.push(savedModule.moduleId);
      return Object.assign({}, pr);
    })
    history.push("/module/" + savedModule.moduleId);
  });

  const handleOnAdd = () => {
    const module = {
      moduleName: moduleName,
      access: access,
      description: description
    }
    useSave.state.run(module);
  };

  return (
    <div className="relative w-[20vw] min-h-[55vh] flex flex-col items-center bg-tealish-blue p-[20px] rounded-xl">
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
      <div className="my-[2vh] text-3xl font-semibold">Add module</div>
      <div className="flex flex-col items-center text-black">
        <div className="mt-[2vh] flex flex-col items-center">
          <label className="block mb-2 text-xl font-medium text-gray-200">
            Module Name
          </label>
          <input
            type="text"
            className="w-[12vw] bg-gray-100 text-gray-900 text-base rounded-lg outline-none border-solid border-[3px] focus:border-main-green p-1"
            defaultValue={moduleName}
            onChange={(e) => setModuleName(e.target.value)}
          />
        </div>
        <div className="mt-[2vh] flex flex-col items-center">
          <label className="block mb-2 text-xl font-medium text-gray-200">
            Access
          </label>
          <select
            className="w-[12vw] bg-gray-100 text-gray-900 text-base rounded-lg outline-none border-solid border-[3px] focus:border-main-green p-1"
            defaultValue={access}
            onChange={(e) => setAccess(e.target.value)}
          >
            <option value="PUBLIC">PUBLIC</option>
            <option value="PRIVATE">PRIVATE</option>
          </select>
        </div>
        <div className="mt-[2vh] flex flex-col items-center">
          <label className="block mb-2 text-xl font-medium text-gray-200">
            Description
          </label>
          <textarea
            className="w-[12vw] h-[10vh] bg-gray-100 text-gray-900 text-base rounded-lg outline-none border-solid border-[3px] focus:border-main-green p-1.5"
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
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
