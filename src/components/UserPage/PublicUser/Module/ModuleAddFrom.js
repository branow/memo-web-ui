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
    <div className="relative flex flex-col justify-center bg-tealish-blue p-[20px]">
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
          <SubmitButton actionName="Add" onClickAction={handleOnAdd} />
        </div>
      </div>
    </div>
  );
};

export default ModuleAddForm;
