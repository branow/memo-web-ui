import Score from "./Score";

const ScoreWrapper = ({ scores }) => {
    let mainScore;
    let otherScore;
    if(scores[0].score > scores[1].score){
        mainScore = scores[0];
        otherScore = scores[1];
    } else {
        mainScore = scores[1];
        otherScore = scores[0];
    }
    return (
      <div className="h-[11vh] flex flex-row bg-charcoal p-[10px] rounded-[30px] opacity-[0.8]">
        <div className="peer z-10">
          <Score score={mainScore} />
        </div>
        <div className="pl-[1vw] hidden peer-hover:block hover:block">
          {" "}
          <Score score={otherScore}></Score>
        </div>
      </div>
    );
}
 
export default ScoreWrapper;