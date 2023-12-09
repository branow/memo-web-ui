import { useImportModule } from "../../hooks/request/import";
import LoadingAnimation from "../constant/LoadingAnimation";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import ErrorBox from "../constant/ErrorBox";
import SubmitButton from "../constant/Buttons/SubmitButton";

const ImportModule = ({ moduleId, close }) => {
  const useImport = useImportModule(() => {
    close();
  });

  const onImport = () => {
    useImport.state.run(moduleId);
  };
  return (
    <>
      {useImport.state.pending && <LoadingAnimation message={"Importing..."} />}
      <div className="relative min-w-[400px] max-w-[800px] w-[25vw] p-[20px] bg-tealish-blue">
        <div className="absolute top-1 right-1">
          <DeleteCircleButton size="25px" color="white" onClickAction={close} />
        </div>
        <div className="flex flex-col justify-center items-center text-white font-sans">
          <div className="p-[5px] text-3xl">Import Module</div>
          <div className="p-[5px] text-xl font-bold">
            Push the button to import module
          </div>
          {useImport.state.error && (
            <ErrorBox
              title={"Import Module Error"}
              message={useImport.state.error}
              close={useImport.state.cleanError}
            />
          )}
          <div className="p-[10px]">
            <SubmitButton actionName="Import" onClickAction={onImport} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImportModule;
