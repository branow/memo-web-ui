const AccessSelect = ({ onChangeAction, value }) => {
    return ( 
        <select
            className="w-full bg-transparent text-[1em] text-white font-semibold px-[0.5vw] py-[1.5vh] border-b-2 border-solid border-white outline-none "
            defaultValue={value}
            onChange={onChangeAction}
          >
            <option className="bg-dark-grey" value="PUBLIC">PUBLIC</option>
            <option className="bg-dark-grey" value="PRIVATE">PRIVATE</option>
          </select>
     );
}
 
export default AccessSelect;