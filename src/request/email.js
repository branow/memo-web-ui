import { Requester } from "./request";

//email must contain: receiver, subject, body
function EmailRequester() {
  this.requester = new Requester('email');
  this.post = (email, success, fail) => {
    this.requester.post({
      body: email,
      success: success,
      fail: fail,
    });
  }
}

export default EmailRequester;