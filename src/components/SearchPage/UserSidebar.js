import Avatar from "../constant/Icons/Avatar";
import { Link } from "react-router-dom";

const UserSidebar = ({ user }) => {
  return (
    <div className="p-[10px] h-full bg-charcoal rounded-l-md">
      <Link to={"/profile/" + user.userId}>
        <div className="w-fit h-full m-auto flex flex-col items-center justify-center gap-[10px] p-[5px] rounded-xl hover:bg-glassy-green">
          <Avatar size="80px" />
          <div className="text-xl text-center w-[150px] overflow-y-auto break-words">
            {user.username}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserSidebar;
