import ChangeCircleButton from "../constant/Buttons/ChangeCircleButton";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import FlashcardSide from "./FlashcardSide";
import { useContext, useState } from "react";
import ScoreWrapper from "../UserPage/PublicUser/ScoreWrapper";
import WindowWrapper from "../constant/WindowWrapper";
import FlashcardEditor from "../FlashcardEditor/FlashcardEditor";
import { useDeleteFlashcard } from "../../hooks/request/flashcard";
import { FlashcardLearnContext } from "./FlashcardContent";
import { LearningContext } from "./LearningPage";

const Flashcard = () => {
  const { toLearnState } = useContext(LearningContext);
  const { flashcardState } = useContext(FlashcardLearnContext);
  const useDelete = useDeleteFlashcard(() => {
    toLearnState.setToLearn((pr) => {
      return pr.filter((id) => flashcardState.flashcard.flashcardId !== id);
    });
  });

  const [isEdit, setIsEdit] = useState(false);

  const onDelete = () => {
    if (window.confirm("Do you really want delete this flashcard?")) {
      useDelete.state.run(flashcardState.flashcard.flashcardId);
    }
  };

  const setFlashcard = (savedflashcard) => {
    flashcardState.setFlashcard((pr) => {
      pr.backSide = savedflashcard.backSide;
      pr.frontSide = savedflashcard.frontSide;
      return Object.assign({}, pr);
    });
  };

  const flashcard = flashcardState.flashcard;
  return (
    <>
      {isEdit && (
        <WindowWrapper close={() => setIsEdit(false)}>
          <FlashcardEditor
            flashcard={flashcard}
            setFlashcard={setFlashcard}
            collectionId={flashcard.collection.collectionId}
            close={() => setIsEdit(false)}
          />
        </WindowWrapper>
      )}
      <div className="text-2xl font-thin">
        {toLearnState.toLearn.length}/
        {toLearnState.toLearn.indexOf(flashcard.flashcardId) + 1}
      </div>
      <div className=" min-w-[45vw] w-fit min-h-[40vh] h-fit p-[20px] bg-tealish-blue rounded-3xl">
        <div className="relative">
          <div className="flex flex-row absolute top-0 right-0 mr-[1vw] gap-3">
            <ChangeCircleButton
              size="25px"
              onClickAction={() => setIsEdit(true)}
            />
            <DeleteCircleButton size="25px" onClickAction={onDelete} />
          </div>
          <div className="relative flex flex-row my-[1vh] mx-[2vw] w-fit h-[10vh]">
            <ScoreWrapper scores={[flashcard.score]} />
            <div className="w-fit h-fit m-auto ml-[2vw]">
              <div className="text-3xl text-main-green font-semibold">
                <span>{flashcard.module.moduleName}</span>
              </div>
              <div className="text-xl mt-[1vh]">
                <span>{flashcard.collection.collectionName}</span>
              </div>
            </div>
          </div>
          <FlashcardSide />
        </div>
      </div>
    </>
  );
};

export default Flashcard;
