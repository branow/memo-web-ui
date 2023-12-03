import DownloadCircleButton from "../constant/Buttons/DownloadCircleButton";
import StudyTypeDescription from "../UserPage/PublicUser/Module/StudyTypeDescription";
import SearchBar from "../constant/SearchBar";
import ChangeCircleButton from "../constant/Buttons/ChangeCircleButton";
import ScoreWrapper from "../UserPage/PublicUser/ScoreWrapper";
import Avatar from "../constant/Icons/Avatar";
import flashcardDto from "../FlashcardEditor/flash-card-dto";
import CardList from "./CardList";



const CollectionInfo = ({ collection, thisUser }) => {
    thisUser = true;
    return (
      <div
        className="relative h-fit w-[80vw] pb-[10vh] bg-tealish-blue mx-auto border-[2px] 
        border-tealish-blue hover:border-solid 
        hover:border-regent-grey"
      >
        <div className="flex flex-row mt-[4vh] mb-[4vh] mx-[4vw] z-10">
          <div className="w-[45vw] flex flex-col">
            <div>
              <span className="text-2xl text-main-green">Module Name</span>
              {thisUser && (
                <span className="ml-[0.5vw]">
                  <ChangeCircleButton size={"20px"} />
                </span>
              )}
            </div>

            <div className="text-4xl mt-[3vh]">
              <span className="font-normal">{collection.collectionName}</span>
              {thisUser && (
                <span className="ml-[0.5vw]">
                  <ChangeCircleButton size={"25px"} />
                </span>
              )}
              <span className="pr-[1vw] font-semibold text-main-green float-right border-r-[4px] border-solid border-white">
                {collection.size}
              </span>
            </div>
          </div>
          <div className="h-[5vh] mt-[2vh] ml-[5vw] z-10">
            <ScoreWrapper scores={collection.scores} />
          </div>
          <div className="absolute top-0 right-0 mt-[2vh] mr-[2vw]">
            <Avatar size={"75px"} />
            <div className="w-fit m-auto text-lg">Author</div>
            {!thisUser && (
              <div className="w-fit m-auto">
                <DownloadCircleButton size={"40px"} />
              </div>
            )}
          </div>
        </div>
        <div
          className={
            thisUser
              ? "relative z-10 border-solid border-white border-y-[3px]"
              : "relative z-10 border-solid border-white border-b-[3px]"
          }
        >
          {thisUser && (
            <StudyTypeDescription
              memoDestination={"#"}
              writingDestination={"#"}
            />
          )}
        </div>
        <div className="w-[30vw] h-[5vh] mt-[5vh] ml-[6.2vw]">
          <SearchBar borderColor={"charcoal"} />
        </div>

        <div className="relative">
          <CardList flashcards={[flashcardDto, flashcardDto, flashcardDto]} thisUser={thisUser} />
        </div>
      </div>
    );
}
 
export default CollectionInfo;