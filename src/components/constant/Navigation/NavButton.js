import { Link } from "react-router-dom";

const NavButton = ({ linkName, linkDestination, logLink }) => {
  return (
    <div className="h-fit my-auto">
      <li>
        <Link
          to={linkDestination}
          className={
            "block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-orangy-yellow p-3 active:bg-yellow-700" +
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
