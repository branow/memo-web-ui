import ChangeCircleButton from "../constant/Buttons/ChangeCircleButton";
import ScoreWrapper from "../UserPage/PublicUser/ScoreWrapper";
import Avatar from "../constant/Icons/Avatar";
import DownloadCircleButton from "../constant/Buttons/DownloadCircleButton";
import { useSaveCollection } from "../../hooks/request/collection";
import { useContext, useState } from "react";
import WindowWrapper from "../constant/WindowWrapper";
import EditForm from "../constant/Forms/EditForm";
import ErrorBox from "../constant/ErrorBox";
import LoadingAnimation from "../constant/LoadingAnimation";
import { CollectionContext } from "./CollectionPage";

const CollectionInfo = () => {
  const { collectionState, isOwner, isAuthenticated } = useContext(CollectionContext);
  const defaultCollection = collectionState.collection;

  const useSave = useSaveCollection((savedCollection) => {
    collectionState.setCollection((pr) => {
      pr.collectionName = savedCollection.collectionName;
      return Object.assign({}, pr);
    });
  });
  const [isEditName, setIsEditName] = useState(false);

  const onSaveNewName = (newName) => {
    if (defaultCollection.collectionName !== newName) {
      const collection = {
        collectionId: defaultCollection.collectionId,
        collectionName: newName,
      };
      const moduleId = defaultCollection.module.moduleId;
      useSave.state.run({ moduleId, collection });
    }
  };

  return (
    <>
      {isEditName && (
        <WindowWrapper close={() => setIsEditName(false)}>
          <EditForm
            title="Collection Name"
            defaultValue={defaultCollection.collectionName}
            actionName="Save"
            close={() => setIsEditName(false)}
            onSubmit={onSaveNewName}
          />
        </WindowWrapper>
      )}

      <div className="flex flex-row mt-[4vh] mb-[4vh] mx-[4vw] z-10">
        <div className="w-[45vw] flex flex-col">
          <div>
            <span className="text-2xl text-main-green">
              {defaultCollection.module.moduleName}
            </span>
          </div>
          <div className="text-4xl mt-[3vh]">
            {useSave.state.pending && (
              <LoadingAnimation message="Renaming..." />
            )}
            {useSave.state.error && (
              <ErrorBox
                title="Collection Rename Error"
                message={useSave.state.error}
                close={useSave.state.cleanError}
              />
            )}
            <span className="font-normal">
              {defaultCollection.collectionName}
            </span>
            {isOwner && (
              <span className="ml-[0.5vw]">
                <ChangeCircleButton
                  size={"25px"}
                  onClickAction={() => setIsEditName(true)}
                />
              </span>
            )}

            <span className="pr-[1vw] font-semibold text-main-green float-right border-r-[4px] border-solid border-white">
              {defaultCollection.flashcardIds.length}
            </span>
          </div>
        </div>
        <div className="h-[5vh] mt-[2vh] ml-[5vw] z-10">
          <ScoreWrapper scores={defaultCollection.scores} />
        </div>
        <div className="absolute top-0 right-0 mt-[2vh] mr-[2vw]">
          <Avatar size={"75px"} />
          <div className="w-fit m-auto text-lg">
            {defaultCollection.owner.username}
          </div>
          {isAuthenticated && !isOwner && (
            <div className="w-fit m-auto">
              <DownloadCircleButton size={"40px"} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CollectionInfo;
