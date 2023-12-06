import ChangeCircleButton from "../constant/Buttons/ChangeCircleButton";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import DownloadCircleButton from "../constant/Buttons/DownloadCircleButton";
import { useContext } from "react";
import { CollectionContext } from "./CollectionPage";
import ScoreWrapper from "../UserPage/PublicUser/ScoreWrapper";

const FlashcardSideBar = ({ scores, onEdit, onDelete }) => {
  const { collectionState, isOwner, isAuthenticated } =
    useContext(CollectionContext);

  return (
    <div>
      <div className="flex flex-row w-fit m-auto my-[1vh]">
        {isOwner && (
          <div>
            <ChangeCircleButton size={"22px"} onClickAction={onEdit} />
            <DeleteCircleButton size={"22px"} onClickAction={onDelete} />
          </div>
        )}
        {!isOwner && isAuthenticated && <DownloadCircleButton size={"40px"} />}
      </div>
      <ScoreWrapper scores={scores} direction="column"/>
    </div>
  );
};

export default FlashcardSideBar;
