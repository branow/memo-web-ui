import StudyButton from "../Module/StudyButton";
import { Link } from "react-router-dom";

const CollectionStudy = ({ memoDestination, writingDestination }) => {
  return (

      <div className="flex w-fit m-auto z-20 gap-16">
        <div className="z-20">
          <Link to={memoDestination}>
            <StudyButton studyTypeName="ORALLY" size="45px" />
          </Link>
        </div>
        <div className="z-20">
          <Link to={writingDestination}>
            <StudyButton studyTypeName="WRITING" size="45px" />
          </Link>
        </div>
      </div>
  );
};

export default CollectionStudy;
