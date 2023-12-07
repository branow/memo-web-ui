import { MdOutlineTypeSpecimen } from "react-icons/md";
import { RiDraftLine } from "react-icons/ri";

const StudyButton = ({ studyTypeName, size }) => {
    return (
      <div className="hover:text-main-green hover:bg-soft-green p-[5px] rounded-xl">
        {studyTypeName === "ORALLY" && <MdOutlineTypeSpecimen size={size} />}
        {studyTypeName === "WRITING" && <RiDraftLine size={size} />}
      </div>
    );
}
 
export default StudyButton;