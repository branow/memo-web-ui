import SideBarScores from "./SideBarScores";
import ChangeCircleButton from "../constant/Buttons/ChangeCircleButton";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import DownloadCircleButton from "../constant/Buttons/DownloadCircleButton";

const FlashcardSideBar = ({ scores, thisUser, onEdit, onDelete }) => {
    return (
      <div>
        <div className="flex flex-row w-fit m-auto my-[1vh]">
          {thisUser === true ? (
            <div>
              <ChangeCircleButton size={"22px"} onClickAction={onEdit}/>
              <DeleteCircleButton size={"22px"} onClickAction={onDelete}/>
            </div>
          ) : (
            <DownloadCircleButton size={"40px"} />
          )}
        </div>
        <SideBarScores scores={scores} />
      </div>
    );
}
 
export default FlashcardSideBar;