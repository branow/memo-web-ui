import MemoStudyButton from "../Module/MemoStudyButton";
import WritingStudyButton from "../Module/WritingStudyButton";
import { Link } from "react-router-dom";

const CollectionStudy = ({ collections }) => {
  return (

      <div className="flex mt-[2vh] mx-[2vw] z-20  justify-between">
        <div className="z-20">
          <Link to="/learnings/memorize" state={{collections}}>
            <MemoStudyButton />
          </Link>
        </div>
        <div className="z-20">
          <Link to="/learnings/writing" state={{collections}}>
            <WritingStudyButton />
          </Link>
        </div>
      </div>
  );
};

export default CollectionStudy;
