import { RxAvatar } from "react-icons/rx";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BsCollection } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import SideButton from "./SideButton";

const Sidebar = ({ tab }) => {
  return (
    <div className="relative w-[30vw] h-screen px-3 py-4 overflow-y-auto bg-form-background-grey text-white">
      <div className="flex m-5">
        <RxAvatar color="white" size="70px" />
        <span className="ml-[15px] self-center text-3xl font-semibold ">
          Hi, User
        </span>
      </div>
      <ul className="space-y-2 font-medium pt-[30px]">
        <SideButton
          linkName={"Profile info"}
          linkDestination={"info"}
          linkImage={<AiOutlineInfoCircle color="white" size="20px" />}
          active={tab === "info" && true}
        />

        <SideButton
          linkName={"Account settings"}
          linkDestination={"settings"}
          linkImage={<FiSettings color="white" size="20px" />}
          active={tab === "settings" && true}
        />

        <SideButton
          linkName={"View modules"}
          linkDestination={"modules"}
          linkImage={<BsCollection color="white" size="20px" />}
          active={tab === "modules" && true}
        />

        <SideButton
          linkName={"Log out"}
          linkDestination={"out"}
          linkImage={<BiExit color="white" size="20px" />}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
