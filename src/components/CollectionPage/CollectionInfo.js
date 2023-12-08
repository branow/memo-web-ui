import ChangeCircleButton from "../constant/Buttons/ChangeCircleButton";
import ScoreWrapper from "../UserPage/PublicUser/ScoreWrapper";
import Avatar from "../constant/Icons/Avatar";
import DownloadCircleButton from "../constant/Buttons/DownloadCircleButton";
import { useContext, useState } from "react";
import WindowWrapper from "../constant/WindowWrapper";
import { CollectionContext } from "./CollectionPage";
import CollectionEditForm from "./CollectionEditForm";
import { Link } from "react-router-dom";

const CollectionInfo = () => {
  const { collectionState, isOwner, isAuthenticated } =
    useContext(CollectionContext);
  const [isEdit, setIsEdit] = useState(false);
  const collection = collectionState.collection;
  const userId = collectionState.collection.owner.userId

  return (
    <>
      {isEdit && (
        <WindowWrapper close={() => setIsEdit(false)}>
          <CollectionEditForm
            collectionState={collectionState}
            close={() => setIsEdit(false)}
          />
        </WindowWrapper>
      )}

      <div className="flex flex-row mt-[4vh] mb-[4vh] mx-[4vw] px-[1vw]">
        <div className="w-[40vw] flex flex-col border-r-[4px] border-solid border-white">
          <div>
            <Link to={"/module/" + collection.module.moduleId}>
              <span className="text-2xl text-main-green cursor-pointer hover:underline hover:decoration-2">
                {collection.module.moduleName}
              </span>
            </Link>
          </div>
          <div className="text-4xl mt-[3vh]">
            <span className="font-normal">{collection.collectionName}</span>
            {isOwner && (
              <span className="ml-[0.5vw]">
                <ChangeCircleButton
                  size={"25px"}
                  onClickAction={() => setIsEdit(true)}
                />
              </span>
            )}

            <span className="pr-[1vw] font-semibold text-main-green float-right">
              {collection.flashcardIds.length}
            </span>
          </div>
        </div>
        <div className="my-auto ml-[8vw] w-[18vw]">
          <ScoreWrapper scores={collection.scores} size="BIGGER" />
        </div>
        <div className="mt-[-2vh] mr-[-5vw]">
          <div className="p-[8px] rounded-xl hover:bg-soft-green">
            <Link to={"/profile/" + userId}>
              <div className="w-fit m-auto">
                <Avatar size={"75px"} />
              </div>
              <div className="w-fit m-auto text-lg">
                {collection.owner.username}
              </div>
            </Link>
          </div>
          {collection && !isOwner && (
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
