import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ScoreBar = ({ score }) => {
    const calcColor = (percent, start, end) => {
        let a = percent / 100,
          b = (end - start) * a,
          c = b + start;
        return 'hsl(' + c + ', 80%, 50%)';
      };
    return (
      <CircularProgressbar
        className="w-[110px] h-[80px]"
        styles={{
          path: {
            stroke: calcColor(score, 0, 120),
          },
        }}
        strokeWidth={8}
      />
    );
}
 
export default ScoreBar;