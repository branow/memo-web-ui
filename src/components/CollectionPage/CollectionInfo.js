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

      <div className="flex flex-row mt-[4vh] mb-[4vh] mx-[4vw] z-10">
        <div className="w-[45vw] flex flex-col border-r-[4px] border-solid border-white">
          <div>
            <Link to={"/module/" + collection.module.moduleId}>
              <span className="text-2xl text-main-green cursor-pointer">
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
        <div className="h-[5vh] mt-[2vh] ml-[5vw] z-10">
          <ScoreWrapper scores={collection.scores} />
        </div>
        <div className="absolute top-0 right-0 mt-[2vh] mr-[2vw]">
          <Link to={"/profile/" + userId}>
            <div className="w-fit m-auto">
              <Avatar size={"75px"} />
            </div>
          </Link>
          <div className="w-fit m-auto text-lg">
            {collection.owner.username}
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
