import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import NavButtonUser from "./NavButtonUser";
import { useContext } from "react";
import { UserContext } from "../../App";
import { TbCardsFilled } from "react-icons/tb";
import SettingsIcon from "../Icons/SettingsIcon";

const Navbar = () => {
  const { userState } = useContext(UserContext);

  return (
    <div className="bg-main-green absolute z-20 w-full bg-opacity-95">
      <div className="flex flex-wrap items-center justify-between mx-auto py-2 px-4">
        <Link to="/" className="flex fill-dark-grey text-dark-grey">
          <TbCardsFilled size="60px" />
          <span className="self-center mx-[15px] text-5xl font-bold font-mono whitespace-nowrap">
            Memo
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <div className="flex text-lg gap-1 font-medium">
            <NavButton linkDestination={"/"}>Home</NavButton>
            <NavButton linkDestination={"/search/user"}>Search</NavButton>
            <NavButton linkDestination={"/about"}>About us</NavButton>
            {userState.user ? (
              <NavButtonUser />
            ) : (
              <NavButton linkDestination={"/login"}>Log in</NavButton>
            )}
            <NavButton linkDestination={"/learning/settings"}>
              <SettingsIcon className="" color="white" size="35px" />
            </NavButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
