import { Link } from "react-router-dom";

const GetStartedSection = ({ user }) => {
  return (
    <section className="relative h-[60vh] w-full bg-get-started-background bg-cover">
      <div className="relative w-[50vw] top-[20vh] left-[20vw] text-white text-4xl font-semibold flex flex-col">
        <div>
          <span>
            Master difficult subjects easily with flashcards and practice tests
          </span>
        </div>
        <div>
          {!user && (
            <Link to="/login">
              <button className="bg-main-green text-2xl font-medium px-[25px] py-[10px] mt-[60px] border-[none] cursor-pointer duration-500 
              hover:bg-green-700 active:bg-green-900">
                Get started
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
