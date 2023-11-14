import { Requester } from "./request";

class CollectionRequester {
  constructor() {
    this.requester = new Requester('collection');
  }
  getCollectionDetails(collectionId, doFinally) {
    this.requester.get({
      url: 'details/' + collectionId,
      doFinally: doFinally,
    });
  };
  save(jwt, moduleId, collection, doFinally) {
    this.requester.post({
      url: '' + moduleId,
      jwt: jwt,
      body: collection,
      doFinally: doFinally,
    });
  };
  delete(jwt, collectionId, doFinally) {
    this.requester.delete({
      url: '' + collectionId,
      jwt: jwt,
      doFinally: doFinally,
    });
  };
}

export default CollectionRequester;