import SettingsCircleButton from "../constant/Buttons/SettingsCircleButton";
import { createContext, useState } from "react";
import { useGetFlashcardIdsToLearn } from "../../hooks/request/learning";
import LoadingAnimation from "../constant/LoadingAnimation";
import ErrorBox from "../constant/ErrorBox";
import WindowWrapper from "../constant/WindowWrapper";
import NoneToLearnAlert from "./NoneToLearnAlert";
import LearningMemorize from "./LearningMemorize";
import LearnCicleAlert from "./LearnCircleAlert";
import Settings from "./Setting/Settings";
import { readSettings } from "../../utils/learning-settings";

export const LearningContext = createContext();

const LearningPage = ({ typeId }) => {
  const [setting, setSetting] = useState(readSettings());
  const { toLearnState, state } = useGetFlashcardIdsToLearn(
    typeId,
    setting.levels,
    setting.sort
  );
  const [isCircle, setIsCircle] = useState(false);
  const [isSetting, setIsSetting] = useState(false);

  const closeSetting = () => {
    setIsSetting(false);
    const curSetting = readSettings();
    if (
      curSetting.audio !== setting.audio ||
      curSetting.sort !== setting.sort ||
      curSetting.levels !== setting.levels
    ) {
      setSetting(curSetting);
    }
  };

  const settingState = { setting, setSetting };
  const circleState = { isCircle, setIsCircle };
  return (
    <>
      {isSetting && (
        <WindowWrapper close={closeSetting}>
          <Settings close={closeSetting} />
        </WindowWrapper>
      )}

      {state.error && (
        <ErrorBox title="Loading Flashcards Error" message={state.error} />
      )}
      {state.pending && <LoadingAnimation message="Loading flashcards..." />}
      <LearningContext.Provider
        value={{ typeId, settingState, toLearnState, circleState }}
      >
        <div className="fixed w-full h-full bg-dark-grey text-white  overflow-hidden">
          <div className="absolute right-[5vw] top-[5vh]">
            <SettingsCircleButton
              size={"40px"}
              onClickAction={() => setIsSetting(true)}
            />
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center">
            {toLearnState.toLearn && (
              <>
                {toLearnState.toLearn.length === 0 && (
                  <WindowWrapper>
                    <NoneToLearnAlert />
                  </WindowWrapper>
                )}
                {circleState.isCircle && (
                  <WindowWrapper>
                    <LearnCicleAlert />
                  </WindowWrapper>
                )}

                {toLearnState.toLearn.length > 0 && <LearningMemorize />}
              </>
            )}
          </div>
        </div>
      </LearningContext.Provider>
    </>
  );
};

export default LearningPage;
