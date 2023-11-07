import { Requester } from "./request";

//email must contain: receiver, subject, body
function EmailRequester() {
  this.requester = new Requester('email');
  this.post = (email, doFinally) => {
    this.requester.post({
      body: email,
      doFinally: doFinally,
    });
  }
}

export default EmailRequester;