import TextFormat from "./TextFormat";
import { toTextFormatter } from "../../utils/text-format/text-formatter-converter";

const FlashcardTextSide = ({ text, format, formatter }) => {
  const currentFormatter = formatter ? formatter.clone() : toTextFormatter(text, format);
  return (
    <div
      className="w-full max-h-[25vh] break-words bg-charcoal p-[15px] rounded-xl overflow-y-auto text-gray-200 font-sans outline-none whitespace-pre-wrap"
    >
      <TextFormat textnode={currentFormatter.root} text={currentFormatter.text} />
    </div>
  );
};

export default FlashcardTextSide;
