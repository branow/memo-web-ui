import { Requester } from "./request";

class FormattedTextRequester {
  constructor() {
    this.requester = new Requester('formatted-text');
  }
  save(jwt, formattedText, doFinally, signal) {
    this.requester.post({
      url: '',
      jwt: jwt,
      body: formattedText,
      doFinally: doFinally,
      signal: signal,
    });
  };
}

export default FormattedTextRequester;