import { useState } from "react";
import SubmitButton from "../constant/Buttons/SubmitButton";
import SearchBar from "../constant/SearchBar";
import { useSearchEnglishWord } from "../../hooks/request/search";
import ErrorBox from "../constant/ErrorBox";
import LoadingScreen from "../constant/LoadingScreen";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import { formatWordAnswer, formatWordQuestion } from "../../utils/text-format/flashcard-styles";

const AutoBuilder = ({ defaultQuery, setFront, setBack, close }) => {
  const [query, setQuery] = useState(defaultQuery);
  const { wordState, state } = useSearchEnglishWord(query);

  const handleOnBuild = () => {
    const word = wordState.word;
    
    setFront((pr) => { //question
      const {text, format} = formatWordQuestion(word);
      return {
        textId: pr.textId,
        text: text,
        format: format,
        image: {
          mediaUrl: word.image,
        },
        audio: null,
      }
    });
    setBack((pr) => { //answer
      const {text, format}  = formatWordAnswer(word);
      return {
        textId: pr.textId,
        text: text,
        format: format,
        image: {
          mediaUrl: word.image,
        },
        audio: {
          mediaUrl: word.audio,
        }
      }
    });
  }

  return (
    <div className="relative flex flex-col justify-center bg-tealish-blue p-[20px]">
      <div className="absolute right-0 top-0">
        <DeleteCircleButton size="25px" color="white" onClickAction={close}/>
      </div>
      <div className="p-[10px]">
        <div className="w-[80%] m-auto p-[5px] border-[3px] border-charcoal rounded-xl">
          <SearchBar query={query} search={setQuery} />
        </div>
      </div>
      <div className="p-[10px]">
        {state.error && <ErrorBox title="Builder error" message={state.error}/>}
        {state.pending && <LoadingScreen />}
        {wordState.word && "is"}
      </div>
      <div className=" flex flex-col justify-center items-center p-[10px] [&:hover>div]:visible">
        <SubmitButton actionName="Build" onClickAction={handleOnBuild}/>
        <div className="invisible w-[70%] p-[5px] text-white text-sm text-thin text-center">
          If you pushed 'Build', all you previous data in the flashcard will be lost
        </div>
      </div>
    </div>
  );
};

export default AutoBuilder;
