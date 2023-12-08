import { Requester } from "./request";

export default class WebSearchRequester {
  constructor() {
    this.requester = new Requester('web-search');
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
  searchEnglishWordSenses(jwt, phrase, doFinally, signal) {
    this.requester.get({
      url: 'english-word-senses/' + phrase,
      jwt: jwt,
      doFinally: doFinally,
      signal: signal,
    });
  };
  searchEnglishWord(jwt, phrase, doFinally, signal) {
    this.requester.get({
      url: 'english-word/' + phrase,
      jwt: jwt,
      doFinally: doFinally,
      signal: signal,
    });
  };
}
