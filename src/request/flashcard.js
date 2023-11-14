import { Requester } from "./request";

class FlashcardRequester {
  constructor() {
    this.requester = new Requester('flashcard');
  }
  getFlashcardDetails(flashcardId, doFinally) {
    this.requester.get({
      url: 'details/' + flashcardId,
      doFinally: doFinally,
    });
  };
  save(jwt, collectionId, flashcard, doFinally) {
    this.requester.post({
      url: '' + collectionId,
      jwt: jwt,
      body: flashcard,
      doFinally: doFinally,
    });
  };
  delete(jwt, flashcardId, doFinally) {
    this.requester.delete({
      url: '' + flashcardId,
      jwt: jwt,
      doFinally: doFinally,
    });
  };
}

export default FlashcardRequester;