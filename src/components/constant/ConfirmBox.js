import FormWrapperComponent from "./Forms/FormComponentWrapper";
import WindowWrapper from "./WindowWrapper";
import DeleteButton from "./Buttons/DeleteButton";
import SubmitButton from "./Buttons/SubmitButton";


const ConfirmBox = ({ text, handleOnDelete }) => {
    return (
      <div className="bg-dark-grey w-[30vw] min-h-[18vh] p-[25px]">
        <div className="text-center text-lg my-[3vh]">{text}</div>
        <div className="flex flex-row gap-10 justify-center items-center">
          <DeleteButton
            actionName="Yes"
            onClickAction={() => handleOnDelete(true)}
          />
          <SubmitButton
            actionName="No"
            onClickAction={() => handleOnDelete(false)}
          />
        </div>
      </div>
    );
}
 
export default ConfirmBox;