import { useGetModuleCollectionAll } from "../../hooks/request/module";
import LoadingAnimation from "../constant/LoadingAnimation";
import ErrorBox from "../constant/ErrorBox";
import SubmitButton from "../constant/Buttons/SubmitButton";
import ModuleCollections from "./ModuleCollections";
import { useSelectedGroup } from "../../hooks/utils";
import { useImportFlashcard } from "../../hooks/request/import";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import { createContext, useEffect, useState } from "react";
import CollectionAddForm from "../ModulePage/CollectionAddForm";
import WindowWrapper from "../constant/WindowWrapper";

export const ImportFlashcardContext = createContext();

const ImportFlashcard = ({ flashcardId, close }) => {
  const { modulesState, state } = useGetModuleCollectionAll();
  const group = useSelectedGroup();
  const useImport = useImportFlashcard(() => {});
  const [isAddCollection, setIsAddColllection] = useState(false);


  useEffect(() => {
    setIsAddColllection(false);
  }, [flashcardId]);

  const setCollection = (collection) => {
    const moduleId = group.selected;
    modulesState.setModules((modules) => {
      for (let module of modules) {
        if (module.moduleId === moduleId) {
          module.collections.push({
            collectionId: collection.collectionId,
            collectionName: collection.collectionName,
            size: 0,
          });
          break;
        }
      }
      return [...modules];
    });
    setIsAddColllection(false);
  };

  const modules = modulesState.modules;
  return (
    <>
      {state.pending && <LoadingAnimation />}
      {state.error && (
        <ErrorBox title={"Loading Collections Error"} message={state.error} />
      )}
      {useImport.state.pending && <LoadingAnimation message={"Importing..."} />}

      {isAddCollection && (
        <WindowWrapper close={() => setIsAddColllection(false)}>
          <CollectionAddForm
            moduleId={group.selected}
            setCollection={setCollection}
            close={() => setIsAddColllection(false)}
          />
        </WindowWrapper>
      )}

      {modules && (
        <ImportFlashcardContext.Provider
          value={{ useImport, flashcardId, close }}
        >
          <div className="relative min-w-[400px] max-w-[800px] w-[25vw] p-[20px] bg-tealish-blue">
            <div className="absolute top-1 right-1">
              <DeleteCircleButton
                size="25px"
                color="white"
                onClickAction={close}
              />
            </div>
            <div className="flex flex-col justify-center items-center text-white font-sans">
              <div className="p-[5px] text-3xl">Import Flashcard</div>
              <div className="p-[5px] text-xl font-bold">
                Choose the target collection
              </div>
              <div className="p-[5px] text-base font-thin">
                do doubleclick to choose
              </div>
              {useImport.state.error && (
                <ErrorBox
                  title={"Import Flashcard Error"}
                  message={useImport.state.error}
                  close={useImport.state.cleanError}
                />
              )}
              <div>
                {modules.length === 0 && <div>You do not have any module</div>}
                {modules.length > 0 && (
                  <div className="p-[10px]">
                    {modules.map((module) => (
                      <div key={module.moduleId}>
                        <ModuleCollections
                          module={module}
                          selectedGroup={group}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="p-[10px]">
                {group.selected && (
                  <SubmitButton actionName="New Collection" onClickAction={() => setIsAddColllection(true)}/>
                )}
              </div>
            </div>
          </div>
        </ImportFlashcardContext.Provider>
      )}
    </>
  );
};

export default ImportFlashcard;
