import { Requester } from "./request";

class FormattedTextRequester {
  constructor() {
    this.requester = new Requester('formatted-text');
  }
  save(jwt, formattedText, doFinally) {
    this.requester.post({
      url: '',
      jwt: jwt,
      body: formattedText,
      doFinally: doFinally,
    });
  };
}

export default FormattedTextRequester;