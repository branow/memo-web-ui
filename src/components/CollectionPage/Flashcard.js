import { useState } from "react";
import FlashcardSide from "./FlashcardSide";
import FlashcardSideBar from "./FlashcardSideBar";
import FlashcardEditor from "../FlashcardEditor/FlashcardEditor";
import WindowWrapper from "../constant/WindowWrapper";
import {
  useDeleteFlashcard,
  useGetFlashcardDetails,
} from "../../hooks/request/flashcard";
import ErrorBox from "../constant/ErrorBox";
import LoadingAnimation from "../constant/LoadingAnimation";

const Flashcard = ({ flashcardId, collectionId, thisUser, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { flashcardState, state } = useGetFlashcardDetails(flashcardId);
  const useDelete = useDeleteFlashcard(() => onDelete(flashcardId));

  const flashcard = flashcardState.flashcard;

  const close = () => {
    setIsEdit(false);
  };

  const handleOnDelete = () => {
    useDelete.state.run(flashcardId);
  };

  return (
    <>
      {isEdit && (
        <WindowWrapper close={close}>
          <FlashcardEditor
            flashcard={flashcard}
            setFlashcard={flashcardState.setFlashcard}
            collectionId={collectionId}
            close={close}
          />
        </WindowWrapper>
      )}

      <div className="p-[20px] relative">
        {state.pending && <LoadingAnimation />}
        {useDelete.state.pending && <LoadingAnimation message="deleting" />}

        <div className="w-[50%] min-w-[200px] m-auto">
          {state.error && (
            <ErrorBox title="Flashcard loading error" message={state.error} />
          )}
          {useDelete.state.error && (
            <ErrorBox
              title="Flashcard deleting error"
              message={useDelete.state.error}
            />
          )}
        </div>

        <div className="w-fit m-auto flex flex-row">
          {flashcard && (
            <>
              <div className="">
                <FlashcardSide side={flashcard.frontSide} />
              </div>
              <div className="relative h-fit flex flex-row">
                <FlashcardSide side={flashcard.backSide} />
                <div>
                  <FlashcardSideBar
                    scores={flashcard.scores}
                    thisUser={thisUser}
                    onEdit={() => setIsEdit(true)}
                    onDelete={handleOnDelete}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Flashcard;
