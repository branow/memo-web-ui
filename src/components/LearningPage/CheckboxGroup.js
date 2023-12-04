import SettingsCheckbox from "./SettingsCheckbox";
import { FaCircle } from "react-icons/fa";

const CheckboxGroup = () => {
    return (
      <div className="flex flex-row gap-4">
        <SettingsCheckbox label="Not at all" icon={<FaCircle color="red" size="40px" id="1"/>} />
        <SettingsCheckbox label="badly" icon={<FaCircle color="orange" size="40px" id="2"/>} />
        <SettingsCheckbox label="normally" icon={<FaCircle color="yellow" size="40px" id="3"/>} />
        <SettingsCheckbox label="perfectly" icon={<FaCircle color="green" size="40px" id="4"/>} />
      </div>
    );
}
 
export default CheckboxGroup;