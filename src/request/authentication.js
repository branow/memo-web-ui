import { Requester } from "./request";

class AuthenticationRequester {
  constructor() {
    this.requester = new Requester('');
  }
  register(user, doFinally, signal) {
    this.requester.post({
      url: 'register',
      body: user,
      doFinally: doFinally,
      signal: signal,
    });
  };
  login(user, doFinally, signal) {
    this.requester.post({
      url: 'login',
      body: user,
      doFinally: doFinally,
      signal: signal,
    });
  };
  enable(token, doFinally, signal) {
    this.requester.post({
      url: 'enable',
      body: token,
      doFinally: doFinally,
      signal: signal,
    });
  };
  regenerateToken(email, oldToken, doFinally, signal) {
    this.requester.post({
      url: 'regenerate-token',
      body: {
        email: email,
        token: oldToken,
      },
      doFinally: doFinally,
      signal: signal,
    });
  };
  resetPassword(emailDto, doFinally, signal) {
    this.requester.post({
      url: 'reset',
      body: emailDto,
      doFinally: doFinally,
      signal: signal,
    });
  }
}

export default AuthenticationRequester;
