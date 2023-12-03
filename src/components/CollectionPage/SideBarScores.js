import Score from "../UserPage/PublicUser/Score";

const SideBarScores = ({ scores }) => {
    return (
      <div className="h-fit flex flex-col bg-charcoal p-[10px] rounded-[30px] opacity-[0.8]">
        <div className="h-fit">
          <Score score={ scores[0] } />
        </div>
        <div className="pt-[1vh]">
          {" "}
          <Score score={ scores[1] }></Score>
        </div>
      </div>
    );
}
 
export default SideBarScores;