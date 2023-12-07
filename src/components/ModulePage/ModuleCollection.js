import ScoreWrapper from "../UserPage/PublicUser/ScoreWrapper";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import StudyTypeDescription from "../UserPage/PublicUser/Module/StudyTypeDescription";
import DownloadCircleButton from "../constant/Buttons/DownloadCircleButton";
import { Link } from "react-router-dom";
import { useDeleteCollection } from "../../hooks/request/collection";
import { useContext } from "react";
import { ModuleContext } from "./ModulePage";
import LoadingAnimation from "../constant/LoadingAnimation";
import ErrorBox from "../constant/ErrorBox";

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
    <div
      className="relative w-[62vw] h-fit  mx-auto my-[2vh] bg-charcoal mt-[2vh] rounded-t-lg border-b-[4px] 
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
      <div className="relative float-right p-[0.5vh] z-10">
        {isOwner && (
          <DeleteCircleButton size={"25px"} onClickAction={handleOnDelete} />
        )}
        {isAuthenticated && !isOwner && <DownloadCircleButton size={"25px"} />}
      </div>
      <div className="flex flex-row px-[3vw] py-[3vh]">
        <div className="w-[30vw]">
          <Link to={"/collection/" + collection.collectionId}>
            <span className="text-3xl font-light cursor-pointer">
              {collection.collectionName}
            </span>
          </Link>
          <span className="float-right text-2xl text-main-green font-semibold">
            {collection.size}
          </span>
        </div>
        <div className="h-[8vh] mt-[-2vh] ml-[5vw] z-10">
          <ScoreWrapper scores={collection.scores} />
        </div>
      </div>
      {isOwner && (
        <div className="border-t-[4px] border-solid border-tealish-blue">
          <StudyTypeDescription
            collections={[collection.collectionId]}
            buttonsClassname={"text-dim-grey"}
          />
        </div>
      )}
    </div>
  );
};

export default ModuleCollection;
