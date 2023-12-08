
const TabButton = ({ name, active, onClickAction }) => {
  return (
    <div
      className={
        "w-[50%] p-[4px] border-b-2 border-solid hover:border-tealish-blue pointer-events-none cursor-pointer" +
        (active ? " border-tealish-blue" : "")
      }
      onClick={onClickAction}
    >
      <div
          className={
            "text-center pointer-events-auto hover:text-main-green" +
            (active ? " text-main-green" : "")
          }
        >
          <span>{name}</span>
        </div>
    </div>
  );
};

export default TabButton;
