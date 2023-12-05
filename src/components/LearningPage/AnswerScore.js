import { FaCircle } from "react-icons/fa";

const AnswerScore = ({ size, score, textSize }) => {
    const calcColor = (percent, start, end) => {
        let a = percent / 100,
          b = (end - start) * a,
          c = b + start;
        return 'hsl(' + c + ', 100%, 50%)';
      };
    return (
      <div className="relative">
        <div className="absolute w-fit h-fit top-0 bottom-0 left-0 right-0 m-auto text-xl z-20">
          {score}
        </div>
        <div className="relative w-fit h-fit m-auto opacity-70 z-10">
          <FaCircle size={size} color={calcColor(score, 0, 100)} />
        </div>
      </div>
    );
}
 
export default AnswerScore;