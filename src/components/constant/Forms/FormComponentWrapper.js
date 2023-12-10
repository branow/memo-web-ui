import DeleteCircleButton from "../Buttons/DeleteCircleButton";
import { Link } from "react-router-dom";

const FormWrapperComponent = ({ children, exitDestination }) => {
  return (
    <div>
      <Link to={exitDestination}>
        <div
          className="h-[100vh] w-[100vw] bg-glassy-grey
            fixed top-0 left-0 flex items-center justify-center z-30 opacity-100 pointer-events-auto duration-500 cursor-default"
        ></div>
      </Link>
      <div className="text-white fixed top-0 bottom-0 left-0 right-0 grid w-fit h-fit bg-dark-grey m-auto justify-center items-center overflow-hidden z-30 duration-500">
        <Link to={exitDestination}>
          <span className="absolute top-1 right-1 text-white cursor-pointer z-30">
            <DeleteCircleButton size="25px" />
          </span>
        </Link>
        {children}
      </div>
    </div>
  );
};

export default FormWrapperComponent;
