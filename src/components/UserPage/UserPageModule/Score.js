import ScoreBar from "../../constant/ScoreBar";

const Score = ({ score, mode }) => {
    let modeName;
    modeName = mode === 1 ? "test mode score" : "writing mode score";
    return ( 
        <div className="px-[6vh] flex float-right">
            <div><ScoreBar score={score} /></div>
            <div className="pl-[7px] text-lg m-auto">{modeName}</div>
          </div>
     );
}
 
export default Score;