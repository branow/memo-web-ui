const DeleteButton = ({ actionName, onClickAction }) => {
    return (
      <div>
        <button
          type="submit"
          className="h-[45px] bg-red-500 cursor-pointer text-[18px] text-white font-medium m-auto px-[15px] duration-500
                  hover:bg-red-700 active:bg-red-900"
          onClick={onClickAction}
        >
          {actionName}
        </button>
      </div>
    );
  };
  
  export default DeleteButton;