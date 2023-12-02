import { formatWordSense } from "../../utils/text-format/flashcard-styles";
import FlashcardSide from "../constant/FlashcardSide";

const SearchedSense = ({ sense }) => {
  const { text, format } = formatWordSense(sense.data);

  const handleOnDragStart = (e) => {
    e.dataTransfer.setData("text", text);
    e.dataTransfer.setData("format", format);
  };

  return (
    <div
      className="relative max-w-[340px] mix-w-[200px] p-[7px] [&:hover>div.hidden]:block"
      draggable="true"
      onDragStart={handleOnDragStart}
    >
      <div className="hidden absolute z-[20] right-1 px-[10px] rounded-xl font-sans text-sm font-bold text-main-green bg-glassy-grey">
        {sense.site}
      </div>
      <div className="hidden absolute z-[20] bottom-1 px-[10px] rounded-xl text-center text-white text-base font-sans bg-glassy-grey">
        {sense.name}
      </div>
      <FlashcardSide text={text} format={format} />
    </div>
  );
};

export default SearchedSense;
