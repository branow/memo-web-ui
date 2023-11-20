import { Requester } from "./request";

class MediaRequester {
  constructor() {
    this.requester = new Requester('media');
  }
  save(jwt, media, doFinally, signal) {
    this.requester.post({
      url: '',
      jwt: jwt,
      body: media,
      doFinally: doFinally,
      signal: signal,
    });
  };
}

export default MediaRequester;