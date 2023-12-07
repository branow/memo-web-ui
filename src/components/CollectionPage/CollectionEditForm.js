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
    <div className="relative w-[20vw] min-h-[30vh] flex flex-col items-center bg-tealish-blue p-[20px] rounded-xl">
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
      <div className=" flex flex-col items-center">
        <label className="block mb-2 text-xl font-medium text-gray-200">
          Collection Name
        </label>
        <input
          type="text"
          className="w-[12vw] bg-gray-100 text-gray-900 text-base rounded-lg outline-none border-solid border-[3px] focus:border-main-green p-1"
          defaultValue={collectionName}
          onChange={(e) => setCollectionName(e.target.value)}
        />
      </div>

      <div className="my-[3vh]">
        <SubmitButton actionName="Save" onClickAction={handleOnSave} />
      </div>
    </div>
  );
};

export default CollectionEditForm;
