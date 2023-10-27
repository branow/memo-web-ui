const FormSubmitButton = ({actionName, onClickAction}) => {
    return ( 
        <div className="relative m-auto flex">
            <button type="submit" className="w-1/2 h-[45px] bg-main-green cursor-pointer text-[1.5em] text-white font-medium m-auto p-0 duration-500
                hover:bg-green-700"
                onClick={onClickAction}
                >{actionName}
            </button>
        </div>
     );
}
 
export default FormSubmitButton;