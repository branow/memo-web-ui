import { MdOutlineTypeSpecimen } from "react-icons/md";
import { RiDraftLine } from "react-icons/ri";

const WritingStudyButton = ({ studyTypeName, onClickAction }) => {
    return (
      <div className="hover:text-main-green hover:bg-soft-green p-[5px] rounded-xl" onClick={onClickAction}>
        {studyTypeName === "ORALLY" && <MdOutlineTypeSpecimen size={"45px"} />}
        {studyTypeName === "WRITING" && <RiDraftLine size={"45px"} />}
      </div>
    );
}
 
export default WritingStudyButton;