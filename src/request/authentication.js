import { Requester } from "./request";

function AuthenticationRequester() {
  this.requester = new Requester('');
  this.register = (user, doFinally) => {
    this.requester.post({
      url: 'register',
      body: user,
      doFinally: doFinally,
    });
  };
  this.login = (user, doFinally) => {
    this.requester.post({
      url: 'login',
      body: user,
      doFinally: doFinally,
    });
  };
  this.enable = (token, doFinally) => {
    this.requester.post({
      url: 'enable',
      body: token,
      doFinally: doFinally,
    });
  };
  this.getUser = (jwt, doFinally) => {
    this.requester.get({
      url: 'user',
      jwt: jwt,
      doFinally: doFinally,
    });
  };
}

export default AuthenticationRequester;
