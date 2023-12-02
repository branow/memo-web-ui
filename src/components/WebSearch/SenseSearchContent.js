import SearchedSense from "./SearchedSense";
import ErrorBox from "../constant/ErrorBox";
import LoadingScreen from "../constant/LoadingScreen";
import { useSearchEnglishWordSenses } from "../../hooks/request/search";

const SenseSearchConentet = ({ query }) => {
  const { sensesState, state } = useSearchEnglishWordSenses(query);

  return (
    <>
      {state.pending && <LoadingScreen />}
      {state.error && (
        <ErrorBox title="Word senses search error" message={state.error} />
      )}
      {!state.error && sensesState.senses && sensesState.senses.length === 0 && (
        <div className="text-xl text-center text-white">
          No Sense found for this request. Please change your request in the
          search bar.
        </div>
      )}
      {sensesState.senses && (
        <div className="flex content-around justify-around flex-wrap">
          {sensesState.senses.map((sense) => <SearchedSense sense={sense}/>)}
        </div>
      )}
    </>
  );
};

export default SenseSearchConentet;
