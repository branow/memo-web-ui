import FlashcardSide from "./FlashcardSide";
import FlashcardSideBar from "./FlashcardSideBar";

const Flashcard = ({ flashCard, thisUser }) => {
    return (
      <div className="w-fit m-auto flex flex-row relative my-[4vh]">
        <div className="">
          <FlashcardSide
            text={flashCard.frontSide.text}
            audio={flashCard.frontSide.audio}
            image={flashCard.frontSide.image}
          />
        </div>
        <div className="relative h-fit flex flex-row">
          <FlashcardSide
            text={flashCard.backSide.text}
            audio={flashCard.backSide.audio}
            image={flashCard.backSide.image}
          />
          <div>
            <FlashcardSideBar scores={flashCard.scores} thisUser={thisUser}/>
          </div>
        </div>
      </div>
    );
}
 
export default Flashcard;