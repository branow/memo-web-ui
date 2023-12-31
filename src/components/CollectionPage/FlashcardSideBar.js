import ChangeCircleButton from "../constant/Buttons/ChangeCircleButton";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import DownloadCircleButton from "../constant/Buttons/DownloadCircleButton";
import { useContext } from "react";
import { CollectionContext } from "./CollectionPage";
import ScoreWrapper from "../UserPage/PublicUser/ScoreWrapper";

const FlashcardSideBar = ({ scores, onEdit, onDelete, onImport }) => {
  const { collectionState, isOwner, isAuthenticated } =
    useContext(CollectionContext);

  return (
    <div className="min-w-[5vw] min-h-[30vh] mt-[-2vh]">
      <div className="flex flex-row m-auto my-[1vh] justify-center invisible group-hover/fc:visible">
        {isOwner && (
          <div className="w-fit m-auto">
            <ChangeCircleButton size={"22px"} onClickAction={onEdit} />
            <DeleteCircleButton size={"22px"} onClickAction={onDelete} />
          </div>
        )}
        {!isOwner && isAuthenticated && <DownloadCircleButton size={"40px"} onClickAction={onImport} />}
      </div>
      <div className="w-fit m-auto"><ScoreWrapper scores={scores} direction="column" size="SMALLER" /></div>
      
    </div>
  );
};

export default FlashcardSideBar;
