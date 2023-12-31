import { MdOutlineTypeSpecimen } from "react-icons/md";
import { RiDraftLine } from "react-icons/ri";

const StudyButton = ({ studyTypeName, onClickAction, size, collectionDescription }) => {
    return (
          <div
            className="hover:bg-soft-green p-[10px] rounded-full cursor-pointer"
            onClick={onClickAction}
          >
            {studyTypeName === "ORALLY" && (
              
              <div>
                { collectionDescription && 
                <MdOutlineTypeSpecimen size={size} className="opacity-30"/>
                }
                { !collectionDescription && 
                <MdOutlineTypeSpecimen size={size}/>
                }
                </div>
            )}
            {studyTypeName === "WRITING" && (
              
              <div>
                { collectionDescription && 
                <RiDraftLine size={size} className="opacity-30"/>
                }
                { !collectionDescription && 
                <RiDraftLine size={size}/>
                }
                </div>
            )}
          </div>


        

    );
}
 
export default StudyButton;