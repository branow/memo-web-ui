import StudyButton from "../Module/StudyButton";
import { Link, useHistory } from "react-router-dom";

const CollectionStudy = ({ collections }) => {
  const history = useHistory();

  const push = (link) => {
    console.log(collections);
    history.push(link, {
      collections: collections,
    });
  };

  return (
    <div className="flex w-fit m-auto z-20 gap-16">
      <div className="z-20">
        <StudyButton
          studyTypeName="ORALLY"
          onClickAction={() => push("/learning/memorize")}
          size="30px"
        />
      </div>
      <div className="z-20">
        <StudyButton
          studyTypeName="WRITING"
          onClickAction={() => push("/learning/writing")}
          size="30px"
        />
      </div>
    </div>
  );
};

export default CollectionStudy;
