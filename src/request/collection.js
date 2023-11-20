import { Requester } from "./request";

class CollectionRequester {
  constructor() {
    this.requester = new Requester('collection');
  }
  getCollectionDetails(collectionId, doFinally, signal) {
    this.requester.get({
      url: 'details/' + collectionId,
      doFinally: doFinally,
      signal: signal,
    });
  };
  save(jwt, moduleId, collection, doFinally, signal) {
    this.requester.post({
      url: '' + moduleId,
      jwt: jwt,
      body: collection,
      doFinally: doFinally,
      signal: signal,
    });
  };
  delete(jwt, collectionId, doFinally, signal) {
    this.requester.delete({
      url: '' + collectionId,
      jwt: jwt,
      doFinally: doFinally,
      signal: signal,
    });
  };
}

export default CollectionRequester;