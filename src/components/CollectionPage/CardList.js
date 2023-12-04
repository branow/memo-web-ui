import Flashcard from "./Flashcard";
import AddButton from "../constant/Buttons/AddButton";
import { useSaveFlashcard } from "../../hooks/request/flashcard";
import LoadingAnimation from "../constant/LoadingAnimation";
import ErrorBox from "../constant/ErrorBox";
import { useContext } from "react";
import { CollectionContext } from "./CollectionPage";

const CardList = () => {
  const { collectionState, isOwner, isAuthenticated } =
    useContext(CollectionContext);
  const defaultFlashcardIds = collectionState.collection.flashcardIds;
  const collectionId = collectionState.collection.collectionId;

  const useSave = useSaveFlashcard((flashcard) => {
    collectionState.setCollection((pr) => {
      pr.flashcardIds.push(flashcard.flashcardId);
      return Object.assign({}, pr);
    });
  });

  const hadnleOnAdd = () => {
    const flashcard = {};
    useSave.state.run({ flashcard, collectionId });
  };

  return (
    <>
      {defaultFlashcardIds.map((flashcardId) => (
        <div key={flashcardId}>
          <Flashcard flashcardId={flashcardId} />
        </div>
      ))}
      {isOwner && (
        <>
          {useSave.state.error && (
            <div className="fixed bottom-[5vh] left-[5vw] w-fit h-fit z-20 duration-300">
              <ErrorBox
                title="Flashcard adding error"
                message={useSave.state.error}
                close={useSave.state.cleanError}
              />
            </div>
          )}

          <div className="fixed bottom-[5vh] right-[5vw] w-fit h-fit z-20">
            {useSave.state.pending && <LoadingAnimation message="Adding..." />}
            <AddButton onClickAction={hadnleOnAdd} />
          </div>
        </>
      )}
    </>
  );
};

export default CardList;
