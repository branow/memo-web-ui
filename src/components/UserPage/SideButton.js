import { Link } from "react-router-dom";
const SideButton = ({ linkName, linkDestination, linkImage, active }) => {
  return (
    <div>
      <li>
        <Link
          to={linkDestination}
          className={
            "flex items-center p-2 rounded-lg dark:text-white hover:bg-main-green" +
            (active ? " bg-main-green" : "")
          }
        >
          {linkImage}
          <span className="ml-3">{linkName}</span>
        </Link>
      </li>
    </div>
  );
};

export default SideButton;
