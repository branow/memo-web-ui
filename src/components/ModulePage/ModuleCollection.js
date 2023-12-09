import ScoreWrapper from "../UserPage/PublicUser/ScoreWrapper";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import StudyTypeDescription from "../UserPage/PublicUser/Module/StudyTypeDescription";
import DownloadCircleButton from "../constant/Buttons/DownloadCircleButton";
import { Link } from "react-router-dom";
import { useDeleteCollection } from "../../hooks/request/collection";
import { useContext, useState } from "react";
import { ModuleContext } from "./ModulePage";
import LoadingAnimation from "../constant/LoadingAnimation";
import ErrorBox from "../constant/ErrorBox";
import WindowWrapper from "../constant/WindowWrapper";
import ImportCollection from "../ImportWindow/ImportCollection";

const ModuleCollection = ({ collection }) => {
  const { moduleState, isAuthenticated, isOwner } = useContext(ModuleContext);
  const useDelete = useDeleteCollection(() => {
    moduleState.setModule((pr) => {
      pr.collections = pr.collections.filter(
        (c) => c.collectionId !== collection.collectionId
      );
      return Object.assign({}, pr);
    });
  });
  const [isImport, setIsImport] = useState(false);

  const handleOnDelete = () => {
    if (
      window.confirm(
        "Do you really want to delete the collection: " +
          collection.collectionName
      )
    ) {
      useDelete.state.run(collection.collectionId);
    }
  };

  return (
    <>
      {isImport && (
        <WindowWrapper close={() => setIsImport(false)}>
          <ImportCollection collectionId={collection.collectionId} close={() => setIsImport(false)} />
        </WindowWrapper>
      )}
      <div
        className="[&:hover>div.hidden]:block relative w-[50vw] h-fit  mx-auto my-[2vh] bg-charcoal mt-[2vh] rounded-t-lg border-b-[4px] 
    border-charcoal hover:border-solid hover:border-regent-grey "
      >
        {useDelete.state.pending && <LoadingAnimation message="Deleting..." />}
        {useDelete.state.error && (
          <ErrorBox
            title="Collection Delete Error"
            message={useDelete.state.error}
            close={useDelete.state.cleanError}
          />
        )}
        <div className="hidden relative float-right p-[0.5vh]">
          {isOwner && (
            <DeleteCircleButton size={"25px"} onClickAction={handleOnDelete} />
          )}
          {isAuthenticated && !isOwner && (
            <DownloadCircleButton
              size={"25px"}
              onClickAction={() => setIsImport(true)}
            />
          )}
        </div>
        <div className="flex flex-row px-[3vw] py-[3vh]">
          <div className="w-[22vw]">
            <Link to={"/collection/" + collection.collectionId}>
              <span className="text-2xl font-light cursor-pointer hover:underline hover:decoration-2">
                {collection.collectionName}
              </span>
            </Link>
            <span className="float-right text-3xl text-main-green font-semibold">
              {collection.size}
            </span>
          </div>
          <div className="w-[12vw] h-[9vh] mt-[-2vh] ml-[6vw]">
            <ScoreWrapper scores={collection.scores} size="SMALLER" />
          </div>
        </div>
        {isOwner && (
          <div className="border-t-[4px] border-solid border-tealish-blue">
            <StudyTypeDescription
              collections={[collection.collectionId]}
              buttonsClassname={"text-dim-grey"}
              collectionDescription={true}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ModuleCollection;
