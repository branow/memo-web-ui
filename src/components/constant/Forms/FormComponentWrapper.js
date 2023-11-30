import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const FormWrapperComponent = ({ children }) => {
  return (
    <div>
      <Link to="/">
        <div
          className="h-[100vh] w-[100vw] bg-glassy-grey
            fixed top-0 left-0 flex items-center justify-center z-10 opacity-100 pointer-events-auto duration-500 cursor-default"
        ></div>
      </Link>
      <div className="fixed grid w-max h-max bg-dark-grey top-[20vh] left-[35vw] justify-center items-center overflow-hidden z-10 duration-500">
        <Link to="/">
          <span className="absolute top-1 right-1 text-white cursor-pointer z-20">
            <RxCross1 size="25px" />
          </span>
        </Link>
        {children}
      </div>
    </div>
  );
};

export default FormWrapperComponent;
