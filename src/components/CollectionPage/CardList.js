import Flashcard from "./Flashcard";
import { Link } from "react-router-dom";
import AddButton from "../constant/Buttons/AddButton";

const CardList = ({ flashcards, thisUser }) => {
    return (
      <>
        {flashcards.map((flashcard) => (
          <div key={flashcard.flashcardId}>
            <Flashcard thisUser={thisUser} flashCard={flashcard} />
          </div>
        ))}
        {thisUser && (
          <div className="absolute w-fit h-fit right-0 mt-[-8vh] mr-[-3vw] z-10">
            <Link to={"#"}>
              <AddButton />
            </Link>
          </div>
        )}
      </>
    );
}
 
export default CardList;