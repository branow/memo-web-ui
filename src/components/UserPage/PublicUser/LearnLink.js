import { Link } from "react-router-dom";

const LearnLink = ({ destination, name, icon }) => {
    return (
      <li
        className="text-[1.2em] font-medium px-[2vw] py-[1vh] duration-500
            hover:bg-green-700 active:bg-green-900"
      >
        <Link className="flex flex-row" to={destination}>
          {name}
          {icon}
        </Link>
      </li>
    );
}
 
export default LearnLink;