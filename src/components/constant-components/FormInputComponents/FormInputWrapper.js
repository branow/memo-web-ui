const FormInputWrapper = ({childrenInput, inputName, inputIcon}) => {
    return ( 
        <div className="relative w-[100%] h-[50px] border-b-2 border-solid border-white my-[30px]">
            <span className="absolute right-[8px] text-[1.2em] text-white leading-[57px]">{inputIcon}</span>
                {childrenInput}
            <label className="absolute top-[50%] left-[5px] translate-y-[-50%] text-[1em] text-white font-medium 
            duration-[.5s] peer-focus:top-[-5px] peer-valid:top-[-5px] pointer-events-none">{inputName}</label>
        </div>
     );
}
 
export default FormInputWrapper;