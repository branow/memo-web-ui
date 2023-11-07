import { Requester } from "./request";

class AuthenticationRequester {
  constructor() {
    this.requester = new Requester('');
  }
  register(user, doFinally) {
    this.requester.post({
      url: 'register',
      body: user,
      doFinally: doFinally,
    });
  };
  login(user, doFinally) {
    this.requester.post({
      url: 'login',
      body: user,
      doFinally: doFinally,
    });
  };
  enable(token, doFinally) {
    this.requester.post({
      url: 'enable',
      body: token,
      doFinally: doFinally,
    });
  };
  getUser(jwt, doFinally) {
    this.requester.get({
      url: 'user',
      jwt: jwt,
      doFinally: doFinally,
    });
  };
  regenerateToken(email, oldToken, doFinally) {
    this.requester.post({
      url: 'regenerate-token',
      body: {
        email: email,
        token: oldToken,
      },
      doFinally: doFinally,
    });
  };
}

export default AuthenticationRequester;
