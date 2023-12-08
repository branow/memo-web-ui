import ModuleCollection from "./ModuleCollection";
import SearchBar from "../constant/SearchBar";
import { useContext, useState } from "react";
import { ModuleContext } from "./ModulePage";
import WindowWrapper from "../constant/WindowWrapper";
import CollectionAddForm from "./CollectionAddForm";
import FixedAddButton from "../constant/Buttons/FixedAddButton";

const ModuleCollectionList = () => {
  const { moduleState, isAuthenticated, isOwner } = useContext(ModuleContext);
  const [isAdding, setIsAdding] = useState(false);

  const collections = moduleState.module.collections;
  return (
    <>
      {isAdding && (
        <WindowWrapper close={() => setIsAdding(false)}>
          <CollectionAddForm
            moduleState={moduleState}
            close={() => setIsAdding(false)}
          />
        </WindowWrapper>
      )}
      

      {collections.map((collection) => (
        <div key={collection.collectionId}>
          <ModuleCollection collection={collection} />
        </div>
      ))}

      {isOwner && <FixedAddButton onClickAction={() => setIsAdding(true)} />}
    </>
  );
};

export default ModuleCollectionList;
