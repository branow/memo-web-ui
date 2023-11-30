import { Requester } from "./request";

export default class SearchRequester {
  constructor() {
    this.requester = new Requester('search');
  }
  searchImages(jwt, phrase, doFinally, signal) {
    this.requester.get({
      url: 'images/' + phrase,
      jwt: jwt,
      doFinally: doFinally,
      signal: signal,
    });
  };
  searchAudios(jwt, phrase, doFinally, signal) {
    this.requester.get({
      url: 'audios/' + phrase,
      jwt: jwt,
      doFinally: doFinally,
      signal: signal,
    });
  };
}
