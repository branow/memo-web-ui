import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ScoreBar = (props) => {
    const { score } = props;
    const calcColor = (percent, start, end) => {
        let a = percent / 100,
          b = (end - start) * a,
          c = b + start;
        return 'hsl(' + c + ', 100%, 50%)';
      };
    return (
      <CircularProgressbar
        className="w-[40px] h-[40px]"
        value={score}
        text={`${score}`}
        textSize
        
        
        styles={{
          trail: {
            strokeLinecap: "butt",
            transform: "rotate(-126deg)",
            transformOrigin: "center center",
          },
          path: {
            strokeLinecap: "butt",
            transform: "rotate(-126deg)",
            transformOrigin: "center center",
            stroke: calcColor(score, 0, 120),
          },
          text: {
            fill: "#ddd",
            fontSize: '36px',
          },
        }}
        strokeWidth={10}
      />
    );
}
 
export default ScoreBar;