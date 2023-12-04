import DeleteCircleButton from "../Buttons/DeleteCircleButton";
import { Link } from "react-router-dom";

const FormWrapperComponent = ({ children, exitDestination }) => {
  return (
    <div>
      <Link to={exitDestination}>
        <div
          className="h-[100vh] w-[100vw] bg-glassy-grey
            fixed top-0 left-0 flex items-center justify-center z-10 opacity-100 pointer-events-auto duration-500 cursor-default"
        ></div>
      </Link>
      <div className="text-white fixed grid w-fit h-fit bg-dark-grey top-[20vh] left-[35vw] justify-center items-center overflow-hidden z-10 duration-500">
        <Link to={exitDestination}>
          <span className="absolute top-1 right-1 text-white cursor-pointer z-20">
            <DeleteCircleButton size="25px" />
          </span>
        </Link>
        {children}
      </div>
    </div>
  );
};

export default FormWrapperComponent;
