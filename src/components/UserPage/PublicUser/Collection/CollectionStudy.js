import StudyButton from "../Module/StudyButton";
import { Link } from "react-router-dom";

const CollectionStudy = ({ collections }) => {
  return (
    <div className="flex w-fit m-auto z-20 gap-16">
      <div className="z-20">
        <Link to="/learnings/memorize" state={{ collections }}>
          <StudyButton studyTypeName="ORALLY" />
        </Link>
      </div>
      <div className="z-20">
        <Link to="/learnings/writing" state={{ collections }}>
          <StudyButton studyTypeName="WRITING" />
        </Link>
      </div>
    </div>
  );
};

export default CollectionStudy;
