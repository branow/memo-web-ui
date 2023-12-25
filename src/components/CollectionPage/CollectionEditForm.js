import { useState } from "react";
import { useSaveCollection } from "../../hooks/request/collection";
import LoadingAnimation from "../constant/LoadingAnimation";
import ErrorBox from "../constant/ErrorBox";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import SubmitButton from "../constant/Buttons/SubmitButton";
import GeneralInputField from "../constant/FormInput/GeneralInputField";

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
    <div className="relative min-w-[25vw] min-h-[35vh] flex flex-col items-center p-[20px] rounded-xl bg-dark-grey">
      {useSave.state.pending && <LoadingAnimation message="Renaming..." />}
      {useSave.state.error && (
        <ErrorBox
          title="Collection Rename Error"
          message={useSave.state.error}
          close={useSave.state.cleanError}
        />
      )}
      <div className="absolute top-0 right-0">
        <DeleteCircleButton size="25px" onClickAction={close} />
      </div>
      <div className="my-[2vh] text-3xl font-semibold">Edit Collection</div>
      <div className="w-[16vw] mt-[2vh] flex flex-col items-center">
        <label className="block mb-[-2vh] text-xl font-medium text-gray-200">
          Collection Name
        </label>
        <GeneralInputField
          value={collectionName}
          onChangeAction={(e) => setCollectionName(e.target.value)}
        />
      </div>

      <div className="my-[1vh]">
        <SubmitButton actionName="Save" onClickAction={handleOnSave} />
      </div>
    </div>
  );
};

export default CollectionEditForm;
