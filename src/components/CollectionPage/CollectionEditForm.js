import { useState } from "react";
import { useSaveCollection } from "../../hooks/request/collection";
import LoadingAnimation from "../constant/LoadingAnimation";
import ErrorBox from "../constant/ErrorBox";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import SubmitButton from "../constant/Buttons/SubmitButton";

const CollectionEditForm = ({ collectionState, close }) => {
  const [collectionName, setCollectionName] = useState(
    collectionState.collection.collectionName
  );

  const useSave = useSaveCollection((collection) => {
    collectionState.setCollection((pr) => {
      pr.collectionName = collection.collectionName;
      return Object.assign({}, pr);
    });
    close();
  });

  const handleOnSave = () => {
    const collection = {
      collectionId: collectionState.collection.collectionId,
      collectionName: collectionName,
    };
    const moduleId = collectionState.collection.module.moduleId;
    useSave.state.run({ moduleId, collection });
  };

  return (
    <div className="relative flex flex-col p-[20px] bg-tealish-blue">
      {useSave.state.pending && <LoadingAnimation message="Renaming..." />}
      {useSave.state.error && (
        <ErrorBox
          title="Collection Rename Error"
          message={useSave.state.error}
          close={useSave.state.cleanError}
        />
      )}
      <div className="absolute top-0 right-0">
        <DeleteCircleButton onClickAction={close} />
      </div>
      <div>Edit Collection</div>
      <div>
        <div className="p-[10px]">Collection Name</div>
        <div className="p-[10px] text-black">
          <input
            type="text"
            defaultValue={collectionName}
            onChange={(e) => setCollectionName(e.target.value)}
          />
        </div>
      </div>

      <div className="p-[10px]">
        <SubmitButton actionName="Save" onClickAction={handleOnSave} />
      </div>
    </div>
  );
};

export default CollectionEditForm;
