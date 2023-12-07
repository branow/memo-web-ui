import DeleteCircleButton from "../../constant/Buttons/DeleteCircleButton";
import ToggleSwitch from "./ToggleSwitch";
import CheckboxGroup from "./CheckboxGroup";
import SubmitButton from "../../constant/Buttons/SubmitButton";
import { readSettings, writeSettings } from "../../../utils/learning-settings";
import { useState } from "react";

const Settings = ({ close }) => {
  const defaultSetting = readSettings();
  const [isAudio, setIsAudio] = useState(defaultSetting.audio);
  const [levels, setLevels] = useState(defaultSetting.levels);
  const [isSort, setIsSort] = useState(defaultSetting.sort);

  const onSubmit = () => {
    const settings = {
      audio: isAudio,
      levels: levels,
      sort: isSort,
    }
    writeSettings(settings);
    close();
  }

  return (
    <div className="relative min-w-[40vw] min-h-[55vh] p-[5px] bg-charcoal rounded-lg text-white">
      <div className="float-right">
        <DeleteCircleButton size="25px" onClickAction={close} />
      </div>
      <div className="p-[10px]">
        <div className="text-3xl font-semibold mt-[4vh] ml-[3vw]">
          <span>Parameters</span>
        </div>
        <div className="flex flex-col mt-[3vh] ml-[3vw]">
          <div className="flex flex-row text-xl">
            <span className="w-[12vw]">Automatic card sorting</span>
            <div className="ml-[7vw]">
              <ToggleSwitch checked={isSort} onChangeAction={(e) => setIsSort(e.target.checked)}/>
            </div>
          </div>
          <div className="mt-[1vh] text-base w-[20vw] opacity-80">
            <span>
              Sort the cards by learning level to focus on the terms you need to
              review. Turn sorting off if you want to quickly view cards.
            </span>
          </div>
          <div className="mt-[3vh] flex flex-row text-xl">
            <div className="flex flex-col mr-[1vw]">
              <span>Choose card level manually</span>
              <span className="mt-[1vh] text-base opacity-80">
                Choose levels of cards you want to learn
              </span>
            </div>
            <div className="m-auto">
              <CheckboxGroup checked={levels} onChangeAction={setLevels}/>
            </div>
          </div>
          <div className="flex flex-row mt-[3vh] text-xl">
            <span className="w-[12vw]">Audio</span>
            <div className="ml-[7vw]">
              <ToggleSwitch checked={isAudio} onChangeAction={(e) => setIsAudio(e.target.checked)}/>
            </div>
          </div>
          <div className="my-[4vh] mx-[3vw]">
            <div className="float-right ">
              <SubmitButton actionName="Confirm changes" onClickAction={onSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
