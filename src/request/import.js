import { Requester } from "./request";

export default class ImportRequester {
  constructor() {
    this.requester = new Requester('import');
  }
  importModule(jwt, moduleId, doFinally, signal) {
    this.requester.post({
      url: 'module/' + moduleId,
      jwt: jwt,
      doFinally: doFinally,
      signal: signal,
    });
  };
  importCollection(jwt, collectionId, targetModuleId, doFinally, signal) {
    this.requester.post({
      url: 'collection/' + collectionId + '/' + targetModuleId,
      jwt: jwt,
      doFinally: doFinally,
      signal: signal,
    });
  };
  importFlashcard(jwt, flashcardId, targetCollectionId, doFinally, signal) {
    this.requester.post({
      url: 'flashcard/' + flashcardId + '/' + targetCollectionId,
      jwt: jwt,
      doFinally: doFinally,
      signal: signal,
    });
  };
}
