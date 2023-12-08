import { useState } from "react";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import SubmitButton from "../constant/Buttons/SubmitButton";
import LoadingAnimation from "../constant/LoadingAnimation";
import ErrorBox from "../constant/ErrorBox";
import { useSaveCollection } from "../../hooks/request/collection";
import { useHistory } from "react-router-dom";
import GeneralInputField from "../constant/FormInput/GeneralInputField";

const CollectionAddForm = ({ moduleState, close }) => {
  const [collectionName, setCollectionName] = useState("My New Collection");
  const history = useHistory();
  const useSave = useSaveCollection((collection) => {
    history.push("/collection/" + collection.collectionId);
  });

  const handleOnSave = () => {
    const collection = {
      collectionName: collectionName,
    }
    const moduleId = moduleState.module.moduleId; 
    useSave.state.run({ collection, moduleId });
  };

  return (
    <div className="relative min-w-[25vw] min-h-[35vh] flex flex-col items-center p-[20px] rounded-xl bg-dark-grey">
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
      <div className="my-[2vh] text-3xl font-semibold">Add a new collection</div>

      <div className="flex flex-col items-center text-black">
        <div className="w-[16vw] mt-[2vh] flex flex-col items-center">
          <label className="block mb-[-2vh] text-xl font-medium text-gray-200">
            Collection Name
          </label>
          <GeneralInputField 
          value={collectionName}
          onClickAction={(e) => setCollectionName(e.target.value)}
          />
        </div>
        <div className="my-[1vh]">
          <SubmitButton actionName="Save" onClickAction={handleOnSave} />
        </div>
      </div>
    </div>
  );
};

export default CollectionAddForm;
