import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";
import { memo } from "react";

const GetStartedSection = memo(() => {
  const { userState } = useContext(UserContext);

  return (
    <section className="relative h-[60vh] w-full bg-get-started-background bg-cover">
      <div className="relative w-[50vw] top-[20vh] left-[20vw] text-white text-4xl font-semibold flex flex-col">
        <div>
          <span>
            Master difficult subjects easily with flashcards and practice tests
          </span>
        </div>
        <div>
          { userState.user && (
            <Link to={"/profile/" + userState.user.userId}>
              <GetStartedButton />
            </Link>
          )}
          { !userState.user && (
            <Link to="/login">
              <GetStartedButton />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
});

const GetStartedButton = memo(() => {
  return (
    <button
      className="bg-main-green text-2xl font-medium px-[25px] py-[10px] mt-[60px] border-[none] cursor-pointer duration-500 
    hover:bg-green-700 active:bg-green-900"
    >
      Get started
    </button>
  );
});

export default GetStartedSection;
