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
import { useContext } from "react";
import { CollectionContext } from "./CollectionPage";
import ImportFlashcard from "../ImportWindow/ImportFlashcard";

const Flashcard = ({ flashcardId }) => {
  const { collectionState, isOwner, isAuthenticated } =
    useContext(CollectionContext);
  const [isEdit, setIsEdit] = useState(false);
  const [isImport, setIsImport] = useState(false);
  const { flashcardState, state } = useGetFlashcardDetails(flashcardId);
  const useDelete = useDeleteFlashcard(() => {
    collectionState.setCollection((pr) => {
      pr.flashcardIds = pr.flashcardIds.filter((id) => id !== flashcardId);
      return Object.assign({}, pr);
    });
  });
  const flashcard = flashcardState.flashcard;
  const collectionId = collectionState.collection.collectionId;

  const handleOnDelete = () => {
    useDelete.state.run(flashcardId);
  };

  return (
    <>
      {isEdit && (
        <WindowWrapper close={() => setIsEdit(false)}>
          <FlashcardEditor
            flashcard={flashcard}
            setFlashcard={flashcardState.setFlashcard}
            collectionId={collectionId}
            close={() => setIsEdit(false)}
          />
        </WindowWrapper>
      )}

      {isImport && (
        <WindowWrapper close={() => setIsImport(false)}>
          <ImportFlashcard flashcardId={flashcardId} close={() => setIsImport(false)} />
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

        <div className="w-fit m-auto flex flex-row group/fc">
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
                    onEdit={() => setIsEdit(true)}
                    onDelete={handleOnDelete}
                    onImport={() => setIsImport(true)}
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
