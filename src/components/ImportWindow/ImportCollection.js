import { createContext, useState, useEffect } from "react";
import { useImportCollection } from "../../hooks/request/import";
import { useGetModuleShortDetailsAll } from "../../hooks/request/module";
import ModuleAddForm from "../UserPage/PublicUser/Module/ModuleAddForm";
import ModuleShortDetails from "./ModuleShorDetails";
import LoadingAnimation from "../constant/LoadingAnimation";
import ErrorBox from "../constant/ErrorBox";
import WindowWrapper from "../constant/WindowWrapper";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import SubmitButton from "../constant/Buttons/SubmitButton";

export const ImportCollectionContext = createContext();

const ImportCollection = ({ collectionId, close }) => {
  const { modulesState, state } = useGetModuleShortDetailsAll();
  const useImport = useImportCollection(() => {
    close();
  });
  const [isAddModule, setIsAddModule] = useState(false);

  useEffect(() => {
    setIsAddModule(false);
  }, [collectionId]);

  const setModule = (module) => {
    modulesState.setModules((modules) => {
      const shortDesription = module.description
        ? module.description.substring(0, module.description.length)
        : module.description;
      modules.push({
        moduleId: module.moduleId,
        moduleName: module.moduleName,
        shortDesription: shortDesription,
        access: module.access,
      });
      return [...modules];
    });
    setIsAddModule(false);
  };

  const modules = modulesState.modules;
  return (
    <>
      {state.pending && <LoadingAnimation />}
      {state.error && (
        <ErrorBox title={"Modules Loading Error"} message={state.error} />
      )}
      {useImport.state.pending && <LoadingAnimation message={"Importing..."} />}

      {isAddModule && (
        <WindowWrapper close={() => setIsAddModule(false)}>
          <ModuleAddForm
            setModule={setModule}
            close={() => setIsAddModule(false)}
          />
        </WindowWrapper>
      )}

      {modules && (
        <ImportCollectionContext.Provider value={{ collectionId, useImport }}>
          <div className="relative min-w-[400px] max-w-[800px] w-[25vw] p-[20px] bg-tealish-blue">
            <div className="absolute top-1 right-1">
              <DeleteCircleButton
                size="25px"
                color="white"
                onClickAction={close}
              />
            </div>
            <div className="flex flex-col justify-center items-center text-white font-sans">
              <div className="p-[5px] text-3xl">Import Collection</div>
              <div className="p-[5px] text-xl font-bold">
                Choose the target module
              </div>
              {useImport.state.error && (
                <ErrorBox
                  title={"Import Collection Error"}
                  message={useImport.state.error}
                  close={useImport.state.cleanError}
                />
              )}
              <div>
                {modules.length === 0 && <div>You do not have any module!</div>}
                {modules.length > 0 && (
                  <div className="p-[10px] ">
                    <div className="max-h-[50vh] overflow-y-auto bg-charcoal">
                      {modules.map((module) => (
                        <div key={module.moduleId}>
                          <ModuleShortDetails module={module} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="p-[10px]">
                <SubmitButton
                  actionName="New Module"
                  onClickAction={() => setIsAddModule(true)}
                />
              </div>
            </div>
          </div>
        </ImportCollectionContext.Provider>
      )}
    </>
  );
};

export default ImportCollection;
