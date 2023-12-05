import { Requester } from "./request";

class FlashcardRequester {
  constructor() {
    this.requester = new Requester('flashcard');
  }
  getFlashcardDetails(flashcardId, doFinally, signal) {
    this.requester.get({
      url: 'details/' + flashcardId,
      doFinally: doFinally,
      signal: signal,
    });
  };
  save(jwt, flashcard, collectionId, doFinally, signal) {
    this.requester.post({
      url: '' + collectionId,
      jwt: jwt,
      body: flashcard,
      doFinally: doFinally,
      signal: signal,
    });
  };
  delete(jwt, flashcardId, doFinally, signal) {
    this.requester.delete({
      url: '' + flashcardId,
      jwt: jwt,
      doFinally: doFinally,
      signal: signal,
    });
  };
}

export default FlashcardRequester;