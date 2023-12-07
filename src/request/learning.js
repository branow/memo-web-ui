import { Requester } from "./request";

class LearningRequester {
  constructor() {
    this.requester = new Requester('learn');
  }
  getFlashcardIdsToLearn(jwt, studyTypeId, collections, sort, levels, doFinally, signal) {
    this.requester.get({
      url: studyTypeId,
      param: ['collections=' + collections.join(','), 'levels=' + levels.join(','), 'sort=' + sort],
      jwt: jwt,
      doFinally: doFinally,
      signal: signal,
    });
  };
  setScoreToFlashcard(jwt, flashcardId, studyTypeId, score, doFinally, signal) {
    this.requester.post({
      url: flashcardId + '/' + studyTypeId + '/' + score, 
      jwt: jwt,
      doFinally: doFinally,
      signal: signal,
    });
  };
}

export default LearningRequester;