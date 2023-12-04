import { Link } from "react-router-dom";
import SettingsCircleButton from "../constant/Buttons/SettingsCircleButton";

const LearningPage = () => {
    return (
      <div className="relative w-[100vw] h-[95vh] bg-dark-grey text-white">
        <Link to={"learning/settings"}>
          <div className="float-right mx-[5vw] my-[5vh]">
            <SettingsCircleButton size={"40px"} />
          </div>
        </Link>
      </div>
    );
}
 
export default LearningPage;