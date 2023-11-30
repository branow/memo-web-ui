import { Link } from "react-router-dom";

const NavButton = ({ linkName, linkDestination, logLink }) => {
  return (
    <div>
      <li>
        <Link
          to={linkDestination}
          className={
            "block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-orangy-yellow md:p-2 active:bg-yellow-700" +
            (logLink ? " border-2" : "")
          }
        >
          {linkName}
        </Link>
      </li>
    </div>
  );
};

export default NavButton;
