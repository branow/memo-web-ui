import { Requester } from "./request";

//email must contain: receiver, subject, body
class EmailRequester {
  constructor() {
    this.requester = new Requester('email');
  }
  post(email, doFinally, signal) {
    this.requester.post({
      body: email,
      doFinally: doFinally,
      signal: signal,
    });
  }
}

export default EmailRequester;