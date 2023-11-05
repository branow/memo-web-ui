import { Link } from "react-router-dom";

const NavButton = ({ linkName, linkDestination, logLink }) => {
  return (
    <div>
      <li>
        <Link
          to={linkDestination}
          className={
            (logLink &&
              "block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-main-yellow-hover hover:text-gray-700 md:p-2 border-2") ||
            "block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-main-yellow-hover hover:text-gray-700 md:p-2"
          }
        >
          {linkName}
        </Link>
      </li>
    </div>
  );
};

export default NavButton;
