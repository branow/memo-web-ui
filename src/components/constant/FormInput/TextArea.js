const TextArea = ({ onChangeAction, value }) => {
    return ( 
        <textarea
            className="w-full h-full bg-transparent text-[1em] text-white font-semibold rounded-lg border-[1px] border-solid border-white outline-none p-1.5"
            defaultValue={value}
            onChange={onChangeAction}
          />
     );
}
 
export default TextArea;