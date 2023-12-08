import { Requester } from "./request";

export default class SearchRequester {
  constructor() {
    this.requester = new Requester('search');
  }
  searchUser(query, pageNumber, doFinally, signal) {
    this.requester.get({
      url: 'user/' + prepareQuery(query) + '/' + pageNumber,
      doFinally: doFinally,
      signal: signal,
    });
  };
  searchModule(query, pageNumber, doFinally, signal) {
    this.requester.get({
      url: 'module/' + prepareQuery(query) + '/' + pageNumber,
      doFinally: doFinally,
      signal: signal,
    });
  };
}

function prepareQuery(query) {
  return query.replaceAll(' ', '-')
}
