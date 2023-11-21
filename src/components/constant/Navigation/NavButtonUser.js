import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

const NavButtonUser = ({ username }) => {
  return (
    <div>
      <li>
        <Link
          to="/profile/public/modules"
          className={
            "block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-main-yellow-hover md:p-2 active:bg-yellow-700 border-2"
          }
        >
          <div className="flex px-[10px]">
            <RxAvatar className="mr-[5px]" color="white" size="30px" />
            {username}
          </div>
        </Link>
      </li>
    </div>
  );
};

export default NavButtonUser;
