import { Requester } from "./request";

class MediaRequester {
  constructor() {
    this.requester = new Requester('media');
  }
  save(jwt, media, doFinally) {
    this.requester.post({
      url: '',
      jwt: jwt,
      body: media,
      doFinally: doFinally,
    });
  };
}

export default MediaRequester;