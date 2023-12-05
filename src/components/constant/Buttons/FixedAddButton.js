import AddButton from "./AddButton";

const FixedAddButton = ({ onClickAction }) => {
  return (
    <div className="fixed bottom-[5vh] right-[5vw] w-fit h-fit z-20">
      <AddButton onClickAction={onClickAction} />
    </div>
  );
};

export default FixedAddButton;
