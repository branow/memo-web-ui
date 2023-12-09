const ToggleSwitch = ({ checked, onChangeAction, size, isSwitch }) => {
  return (
      <label className="w-fit h-fit relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          className="sr-only peer"
          onChange={onChangeAction}
        />
        {!size && (
          <div
            className="w-11 h-6 bg-gray-500 rounded-full peer dark:bg-gray-700 peer-focus:ring-2 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 
      peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 
      after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 
      peer-checked:bg-green-600"
          ></div>
        )}
        {size == 'lg' && (
          <div
            className="w-16 h-9 bg-gray-500 rounded-full peer dark:bg-gray-700 peer-focus:ring-2 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 
      peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 
      after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all dark:border-gray-600 
      peer-checked:bg-green-600"
          ></div>
        )}

        {/* <div
          className="w-11 h-6 bg-gray-500 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 
        peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 
        after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 
        peer-checked:bg-green-600"
        >
        </div> */}
      </label>
  );
};

export default ToggleSwitch;
