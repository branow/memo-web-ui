import { useState } from "react";
import SubmitButton from "../constant/Buttons/SubmitButton";
import SearchBar from "../constant/SearchBar";
import { useSearchEnglishWord } from "../../hooks/request/web-search";
import ErrorBox from "../constant/ErrorBox";
import LoadingScreen from "../constant/LoadingScreen";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import {
  formatWordAnswer,
  formatWordQuestion,
} from "../../utils/text-format/flashcard-styles";
import FlashcardSide from "../CollectionPage/FlashcardSide";

const AutoBuilder = ({ defaultQuery, setFront, setBack, close }) => {
  const [query, setQuery] = useState(defaultQuery);
  const { wordState, state } = useSearchEnglishWord(query);

  const toFront = () => {
    const word = wordState.word;
    const { text, format } = formatWordQuestion(word);
    return {
      text: text,
      format: format,
      image: {
        mediaUrl: word.image,
        format: "JPG",
      },
      audio: null,
    };
  };

  const toBack = () => {
    const word = wordState.word;
    const { text, format } = formatWordAnswer(word);
    return {
      text: text,
      format: format,
      image: {
        mediaUrl: word.image,
        format: "JPG",
      },
      audio: {
        mediaUrl: word.audio,
        format: "MP3",
      },
    };
  };

  const handleOnBuild = () => {
    if (!wordState.word) {
      return;
    }

    setFront((pr) => { //question
      const front = toFront();
      return {
        textId: pr.textId,
        text: front.text,
        format: front.format,
        image: front.image,
        audio: front.audio,
      };
    });
    setBack((pr) => { //answer
      const back = toBack();
      return {
        textId: pr.textId,
        text: back.text,
        format: back.format,
        image: back.image,
        audio: back.audio,
      };
    });
    close();
  };

  return (
    <div className="relative flex flex-col gap-[20px] justify-center bg-tealish-blue p-[20px]">
      <div className="absolute right-0 top-0">
        <DeleteCircleButton size="25px" color="white" onClickAction={close} />
      </div>
      <div className="p-[10px]">
        <div className="w-[80%] m-auto p-[5px]">
          <SearchBar query={query} search={setQuery} />
        </div>
      </div>
      <div className="p-[10px]">
        {state.error && (
          <ErrorBox title="Builder error" message={state.error} />
        )}
        {state.pending && <LoadingScreen />}
        {wordState.word && (
          <div className="flex h-[30vh]">
            <FlashcardSide side={toFront()} />
            <FlashcardSide side={toBack()} />
          </div>
        )}
      </div>
      <div className=" flex flex-col justify-center items-center p-[10px] [&:hover>div]:visible">
        <SubmitButton actionName="Apply" onClickAction={handleOnBuild} />
        <div className="invisible w-[70%] p-[5px] text-white text-sm text-thin text-center">
          If you pushed 'Build', all you previous data in the flashcard will be
          lost
        </div>
      </div>
    </div>
  );
};

export default AutoBuilder;
