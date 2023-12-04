import { useState } from "react";
import DeleteCircleButton from "../Buttons/DeleteCircleButton";
import SubmitButton from "../Buttons/SubmitButton";

const EditForm = ({ title, defaultValue, actionName, onSubmit, close }) => {
  const [input, setInput] = useState(defaultValue);

  const handleSubmit = () => {
    onSubmit(input);
    close();
  };

  return (
    <div className="relative flex flex-col p-[20px] bg-tealish-blue">
      <div className="absolute top-0 right-0">
        <DeleteCircleButton onClickAction={close} />
      </div>
      <div className="p-[10px]">{title}</div>
      <div className="p-[10px] text-black">
        <input type="text" defaultValue={defaultValue} onChange={(e) => setInput(e.target.value)} />
      </div>
      <div className="p-[10px]">
        <SubmitButton actionName={actionName} onClickAction={handleSubmit} />
      </div>
    </div>
  );
};

export default EditForm;
