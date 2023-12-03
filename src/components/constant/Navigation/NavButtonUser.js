import { Link } from "react-router-dom";
import Avatar from "../Icons/Avatar";

const NavButtonUser = ({ username }) => {
  return (
    <div>
      <li>
        <Link
          to="/profile/public/modules"
          className={
            "block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-orangy-yellow md:p-2 active:bg-yellow-700 border-2"
          }
        >
          <div className="flex px-[10px]">
            <Avatar className="mr-[5px]" color="white" size="30px" />
            {username}
          </div>
        </Link>
      </li>
    </div>
  );
};

export default NavButtonUser;
