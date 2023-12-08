import { useHistory } from "react-router-dom";

const NoneToLearnAlert = () => {
  const history = useHistory();
  const onClick = () => {
    history.goBack();
  };

  return (
    <div
      className="flex flex-col justify-center items-center w-[400px] p-[20px] bg-tealish-blue "
      onClick={onClick}
    >
      <div className="text-center p-[20px] text-2xl font-sans font-bold">
        Congratulations!!!
      </div>
      <div className="text-center p-[20px] text-lg font-sans">
        There are not any flashcard to learn
      </div>
      <div className="text-center p-[20px] text-base font-sans">
        click on alert to close
      </div>
    </div>
  );
};

export default NoneToLearnAlert;
