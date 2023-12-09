import { useContext } from "react";
import { ImportFlashcardContext } from "./ImportFlashcard";

const Collection = ({ collection }) => {
  const { flashcardId, useImport } = useContext(ImportFlashcardContext);

  const onImport = () => {
    const targetCollectionId = collection.collectionId;
    useImport.state.run({ flashcardId, targetCollectionId });
  };

  return (
    <div
      className="w-full p-[5px] hover:bg-soft-green"
      onDoubleClick={() => onImport()}
    >
      <div className="flex justify-between">
        <div className="p-[5px] text-lg"> {collection.collectionName} </div>
        <div className="p-[5px] text-lg text-main-green">
          {collection.size}
        </div>
      </div>
    </div>
  );
};

export default Collection;
