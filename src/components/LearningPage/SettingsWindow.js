import FormWrapperComponent from "../constant/Forms/FormComponentWrapper";
import ToggleSwitch from "./ToggleSwitch";
import CheckboxGroup from "./CheckboxGroup";
import SubmitButton from "../constant/Buttons/SubmitButton";

const SettingsWindow = () => {
    return (
      <FormWrapperComponent exitDestination={"/learning"}>
        <div className="w-[40vw] h-[55vh] bg-charcoal rounded-lg">
          <div className="text-3xl font-semibold mt-[4vh] ml-[3vw]">
            <span>Parameters</span>
          </div>
          <div className="flex flex-col mt-[3vh] ml-[3vw]">
            <div className="flex flex-row text-xl">
              <span className="w-[12vw]">Automatic card sorting</span>
              <div className="ml-[7vw]">
                <ToggleSwitch />
              </div>
            </div>
            <div className="mt-[1vh] text-base w-[20vw] opacity-80">
              <span>
                Sort the cards by learning level to focus on the terms you need
                to review. Turn sorting off if you want to quickly view cards.
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
                <CheckboxGroup />
              </div>
            </div>
            <div className="flex flex-row mt-[3vh] text-xl">
              <span className="w-[12vw]">Audio</span>
              <div className="ml-[7vw]">
                <ToggleSwitch />
              </div>
            </div>
            <div className="mt-[4vh] mx-[3vw]">
              <div className="float-right ">
                <SubmitButton actionName="Confirm changes" />
              </div>
            </div>
          </div>
        </div>
      </FormWrapperComponent>
    );
}
 
export default SettingsWindow;