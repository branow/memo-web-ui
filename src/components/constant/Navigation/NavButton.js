import { Link } from "react-router-dom";

const NavButton = ({ children, linkDestination }) => {
  return (
    <Link to={linkDestination}>
      <div className="flex flex-col justify-center items-center h-full px-[30px] 
      text-gray-100 hover:bg-soft-yellow active:bg-bold-yellow">
        {children}
      </div>
    </Link>
  );
};

export default NavButton;
