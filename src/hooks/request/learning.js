import Callback from "../../utils/callback";
import usePostRequest from "./usePostRequest";
import useGetRequest from "./useGetRequest";
import { UserCookies } from "../../utils/user-cookie";
import { MultiValidator } from "../../utils/validator/validator";
import LearningRequester from "../../request/learning";
import { getScoreValidator } from "../../utils/validator/validator-impl";
import { useLocation } from "react-router-dom";

export { useGetFlashcardIdsToLearn, useSetScoreToFlashcard };

function useGetFlashcardIdsToLearn(studyTypeId, levels, sort, circleCount) {
  console.log(circleCount);
  const location = useLocation();
  const collections = location.state.collections;
  const request = ({ callback, signal }) => {
    const jwt = new UserCookies().authorizationJwt.get();
    new LearningRequester().getFlashcardIdsToLearn(
      jwt,
      studyTypeId,
      collections,
      sort,
      levels,
      callback,
      signal
    );
  };
  const { dataState, state } = useGetRequest(request, new Callback(), [studyTypeId, levels, sort, circleCount]);
  return {
    toLearnState: { toLearn: dataState.data, setToLearn: dataState.setData },
    state: state,
  };
}

function useSetScoreToFlashcard(setScore, close) {
  const request = ({ data, callback }) => {
    const jwt = new UserCookies().authorizationJwt.get();
    new LearningRequester().setScoreToFlashcard(
      jwt,
      data.flashcardId,
      data.studyTypeId,
      data.score,
      callback
    );
  };
  const callback = new Callback();
  callback.success.addAtEnd(() => {
    if (close) close();
  });
  const buildValidator = (data) =>
    new MultiValidator([getScoreValidator(data.score)]);
  return usePostRequest(setScore, request, callback, buildValidator);
}
