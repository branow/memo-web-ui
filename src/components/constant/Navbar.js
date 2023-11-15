import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import NavButtonUser from "./NavButtonUser";

const Navbar = ({ user }) => {
  // user = {
  //   name: "Billy",
  //   description: "I'm only a lab rat",
  // };
  return (
    <nav className="bg-main-green ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex ">
          <img src="img/logo.png" className="h-12 mr-3" alt="" />
          <span className="self-center text-3xl font-semibold whitespace-nowrap text-gray-100">
            Flashlearn
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="text-lg font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <NavButton linkName={"Find Flashcards"} linkDestination={"#"} />
            <NavButton linkName={"About us"} linkDestination={"/about"} />
            {user ? (
              <NavButtonUser username={user.name} />
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
    </nav>
  );
};

export default Navbar;
