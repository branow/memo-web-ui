import SideBarScores from "./SideBarScores";
import ChangeCircleButton from "../constant/Buttons/ChangeCircleButton";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import DownloadCircleButton from "../constant/Buttons/DownloadCircleButton";

const FlashcardSideBar = ({ scores, thisUser }) => {
    return ( 
        <div className="w-fit">
            <div className="flex flex-row w-fit m-auto my-[1vh]">
                {thisUser === true ? <div><ChangeCircleButton size={"22px"}/> 
            <DeleteCircleButton size={"22px"}/></div> : <DownloadCircleButton size={"40px"}/>
            }
            
            </div>
            <SideBarScores scores={scores}/>
        </div>
     );
}
 
export default FlashcardSideBar;