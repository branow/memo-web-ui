import { BsCollection } from "react-icons/bs";
import SubmitButton from "../../../constant/Buttons/SubmitButton";

const EmptyModules = ({ thisUser }) => {
    return (
      <div className="w-[100vw] h-[50vh]">
        <div className="w-fit h-fit m-auto ">
          <BsCollection className="m-auto mt-[20vh]" size={"120px"} />
          {thisUser === true ? (
            <div>
              <span className="text-3xl font-medium">
                You don't have any modules yet
              </span>
              <div className="w-fit m-auto mt-[5vh]">
                <SubmitButton actionName={"Add module"} />
              </div>
            </div>
          ) : (
            <span className="text-3xl font-medium">
              This user doesn't have any modules yet
            </span>
          )}
        </div>
      </div>
    );
}
 
export default EmptyModules;