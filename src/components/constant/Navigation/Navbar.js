import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import NavButtonUser from "./NavButtonUser";
import { useContext } from "react";
import { UserContext } from "../../App";
import SettingsIcon from "../Icons/SettingsIcon";
import Logo from "../Icons/Logo";

const Navbar = () => {
  const { userState } = useContext(UserContext);

  return (
    <div className="bg-main-green absolute z-20 w-full bg-opacity-95">
      <div className="flex flex-wrap items-center justify-between mx-auto py-2 px-4">
        <Link to="/">
          <Logo headerLogo={true} />
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <div className="flex text-lg gap-1 font-medium">
            <NavButton linkDestination={"/"}>Home</NavButton>
            <NavButton linkDestination={"/search/user"}>Search</NavButton>
            <NavButton linkDestination={"/about"}>About</NavButton>
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
