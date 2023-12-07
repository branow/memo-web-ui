const SettingsCheckbox = ({ checked, onChangeAction, label, icon }) => {
  return (
    <div className="flex flex-col">
      <span className="w-fit m-auto">{icon}</span>
      <span className="w-fit m-auto mt-[0.5vh] text-sm">{label}</span>
      <input
        type="checkbox"
        className="m-auto mt-[1vh] w-5 h-5 accent-green-500 text-green-600 bg-gray-100 border-gray-300 rounded 
        focus:ring-green-500 dark:focus:ring-green-600 focus:ring-2"
        checked={checked}
        onChange={onChangeAction}
      />
    </div>
  );
};

export default SettingsCheckbox;
