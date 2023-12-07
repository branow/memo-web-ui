import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import NavButtonUser from "./NavButtonUser";
import { useContext } from "react";
import { UserContext } from "../../App";
import { TbCardsFilled } from "react-icons/tb";

const Navbar = () => {
  const { userState } = useContext(UserContext);
  
  return (
    <div className="bg-main-green fixed z-20 w-full">
      <div className="flex flex-wrap items-center justify-between mx-auto py-2 px-4">
        <Link to="/" className="flex ">
          <TbCardsFilled color="#333" size="60px"/>
          <span className="self-center mx-[15px] text-5xl font-bold font-mono whitespace-nowrap text-dark-grey">
            Memo
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="text-lg font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <NavButton linkName={"Find Flashcards"} linkDestination={"#"} />
            <NavButton linkName={"About us"} linkDestination={"/about"} />
            {userState.user ? (
              <NavButtonUser username={userState.user.username} />
            ) : (
              <NavButton
                linkName={"Log in"}
                linkDestination={"/login"}
                logLink={true}
              />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
