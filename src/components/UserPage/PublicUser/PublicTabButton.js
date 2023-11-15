import { Link } from "react-router-dom";

const PublicTabButton = ({ destination, name, active }) => {
  return (
    <div
      className={
        "w-[50%] p-[4px] border-b-2 border-solid hover:border-body-background-grey pointer-events-none" +
        (active ? " border-body-background-grey" : "")
      }
    >
      <Link to={destination}>
        <div
          className={
            "m-auto w-fit pointer-events-auto hover:text-main-green" +
            (active ? " text-main-green" : "")
          }
        >
          <span>{name}</span>
        </div>
      </Link>
    </div>
  );
};

export default PublicTabButton;
