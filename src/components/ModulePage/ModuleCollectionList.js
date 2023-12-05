import ModuleCollection from "./ModuleCollection";
import AddButton from "../constant/Buttons/AddButton";
import { useContext, useState } from "react";
import { ModuleContext } from "./ModulePage";
import WindowWrapper from "../constant/WindowWrapper";
import CollectionAddForm from "./CollectionAddForm";

const ModuleCollectionList = () => {
  const { moduleState, isAuthenticated, isOwner } = useContext(ModuleContext);
  const [isAdding, setIsAdding] = useState(false);

  const collections = moduleState.module.collections;
  return (
    <>
      {isAdding && (
        <WindowWrapper close={() => setIsAdding(false)}>
          <CollectionAddForm moduleState={moduleState} close={() => setIsAdding(false)}/>
        </WindowWrapper>
      )}

      {collections.map((collection) => (
        <div key={collection.collectionId}>
          <ModuleCollection collection={collection} />
        </div>
      ))}
      
      {isOwner && (
        <div className="fixed bottom-[5vh] right-[5vw] w-fit h-fit z-20">
          <AddButton onClickAction={() => setIsAdding(true)} />
        </div>
      )}
    </>
  );
};

export default ModuleCollectionList;
