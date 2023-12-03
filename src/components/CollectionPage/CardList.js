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
      </>
    );
}
 
export default CardList;