import { useState } from "react";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import SubmitButton from "../constant/Buttons/SubmitButton";
import LoadingAnimation from "../constant/LoadingAnimation";
import ErrorBox from "../constant/ErrorBox";
import { useSaveCollection } from "../../hooks/request/collection";
import { useHistory } from "react-router-dom";

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
      <div>Add new collection</div>
      <div className="flex flex-col justify-center text-black">
        <div>
          <div>Collection Name</div>
          <input
            type="text"
            defaultValue={collectionName}
            onChange={(e) => setCollectionName(e.target.value)}
          />
        </div>
        <div>
          <SubmitButton actionName="Save" onClickAction={handleOnSave} />
        </div>
      </div>
    </div>
  );
};

export default CollectionAddForm;
