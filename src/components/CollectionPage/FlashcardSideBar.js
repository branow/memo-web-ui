import SideBarScores from "./SideBarScores";
import ChangeCircleButton from "../constant/Buttons/ChangeCircleButton";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import DownloadCircleButton from "../constant/Buttons/DownloadCircleButton";
import { useContext } from "react";
import { CollectionContext } from "./CollectionPage";

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
      <SideBarScores scores={scores} />
    </div>
  );
};

export default FlashcardSideBar;
