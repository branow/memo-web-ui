import { Requester } from "./request";

function AuthenticationRequester() {
  this.requester = new Requester('');
  this.register = (user, success, fail) => {
    this.requester.post({
      url: 'register',
      body: user,
      success: success,
      fail: fail,
    });
  };
  this.login = (user, success, fail) => {
    this.requester.post({
      url: 'login',
      body: user,
      success: success,
      fail: fail,
    });
  };
  this.enable = (token, success, fail) => {
    this.requester.post({
      url: 'enable',
      body: token,
      success: success,
      fail: fail,
    });
  };
  this.getUser = (jwt, success, fail) => {
    this.requester.get({
      url: 'user',
      jwt: jwt,
      success: success,
      fail: fail,
    });
  };
}

export default AuthenticationRequester;
