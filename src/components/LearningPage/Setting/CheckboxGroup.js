import SettingsCheckbox from "./SettingsCheckbox";
import { FaCircle } from "react-icons/fa";

const CheckboxGroup = ({ checked, onChangeAction }) => {
  let array = checked;

  const getDefaultValue = (id) => {
    return array.includes(id);
  }

  const onChangeCheckbox = (value, id) => {
    if (value) {
      array.push(id)
    } else {
      array = array.filter(e => e !== id);
    }
    onChangeAction([...array]);
  }

  return (
    <div className="flex flex-row gap-4">
      <SettingsCheckbox
        label="Not at all"
        icon={<FaCircle color="red" size="40px" id="1" />}
        checked={getDefaultValue(0)}
        onChangeAction={(e) => onChangeCheckbox(e.target.checked, 0)}
      />
      <SettingsCheckbox
        label="badly"
        icon={<FaCircle color="orange" size="40px" id="2" />}
        checked={getDefaultValue(1)}
        onChangeAction={(e) => onChangeCheckbox(e.target.checked, 1)}
      />
      <SettingsCheckbox
        label="normally"
        icon={<FaCircle color="yellow" size="40px" id="3" />}
        checked={getDefaultValue(2)}
        onChangeAction={(e) => onChangeCheckbox(e.target.checked, 2)}
      />
      <SettingsCheckbox
        label="perfectly"
        icon={<FaCircle color="green" size="40px" id="4" />}
        checked={getDefaultValue(3)}
        onChangeAction={(e) => onChangeCheckbox(e.target.checked, 3)}
      />
    </div>
  );
};

export default CheckboxGroup;
