import SubmitButton from "./Buttons/SubmitButton";
import { useHistory } from "react-router-dom";

const ErrorPage = ({ title, message }) => {
    const history = useHistory();
    return (
      <div className="absolute w-full h-[100vh] bg-dark-grey">
        <div className="flex flex-col w-fit h-fit mx-auto mt-[25vh] items-center text-white">
          {!title && (
            <div className="text-[70px] mb-[-2vh]">
              <span>404</span>
            </div>
          )}
          <div className="text-[50px] text-gray-100">
            <span>Oops, nothing here...</span>
          </div>

          {title && (
            <div className="flex flex-col items-center mt-[2vh] mb-[4vh] text-gray-300">
              <span className=" text-3xl ">{title}</span>
              <span className="text-2xl mt-[2vh]">{message}</span>
            </div>
          )}
          {!title && (
            <div className="my-[3vh] text-gray-300">
              <span className=" text-2xl ">Sorry, the page can't be found</span>
            </div>
          )}
          <SubmitButton
            actionName="Go back"
            onClickAction={() => history.goBack()}
          />
        </div>
      </div>
    );
}
 
export default ErrorPage;