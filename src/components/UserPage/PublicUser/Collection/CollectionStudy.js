import MemoStudyButton from "../Module/MemoStudyButton";
import WritingStudyButton from "../Module/WritingStudyButton";
import { Link } from "react-router-dom";

const CollectionStudy = ({ memoDestination, writingDestination }) => {
    return (
      <div className="mt-[2vh] mx-[2vw] z-20 hidden peer-hover:flex hover:flex justify-between">
        <div className="z-20">
          <Link to={memoDestination}>
            <MemoStudyButton />
          </Link>
        </div>
        <div className="z-20">
          <Link to={writingDestination}>
            <WritingStudyButton />
          </Link>
        </div>
      </div>
    );
}
 
export default CollectionStudy;