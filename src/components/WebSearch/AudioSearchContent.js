import { audio } from "./dto";
import { useState } from "react";
import SearchedAudio from "./SearchedAudio";
import LoadingScreen from "../constant/LoadingScreen";
import ErrorBox from "../constant/ErrorBox";
import SubmitButton from "../constant/Buttons/SubmitButton";
import { useSearchAudios } from "../../hooks/request/search";

const PAGE_SIZE = 12;

const AudioSearchContent = ({ query, choose }) => {
  const { audiosState, state } = useSearchAudios(query);
  const [page, setPage] = useState(1);

  const audios = [];
  if (audiosState.audios) {
    for (
      let i = 0;
      i < audiosState.audios.length && i < PAGE_SIZE * page;
      i++
    ) {
      audios[i] = (
        <SearchedAudio
          audio={audiosState.audios[i]}
          onDoubleClick={() => choose(audiosState.audios[i].data)}
        />
      );
    }
  }

  return (
    <div>
      {state.pending && <LoadingScreen />}
      {state.error && (
        <ErrorBox title="Image search error" message={state.error} />
      )}
      {!state.error && audios && audios.length === 0 && (
        <div className="text-xl text-center text-white">
          No images found for this request. Please change your request in the
          search bar.
        </div>
      )}
      {audiosState.audios && (
        <div className=" flex flex-col justify-center content-center">
          <div className="flex content-around justify-around flex-wrap">
            {audios}
          </div>
          <div className="w-fit m-auto">
            {audiosState.audios.length / PAGE_SIZE > page && (
              <SubmitButton
                actionName="More"
                onClickAction={(e) => setPage(page + 1)}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AudioSearchContent;
