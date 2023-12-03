import { Requester } from "./request";

class UserRequester {
  constructor() {
    this.requester = new Requester('user');
  }
  getUserGeneralDetails(jwt, userId, doFinally, signal) {
    this.requester.get({
      url: 'general-details/' + userId,
      jwt: jwt,
      doFinally: doFinally,
      signal: signal,
    });
  }
  getUserPrivateShortDetails(jwt, doFinally, signal) {
    this.requester.get({
      url: 'private-short-details',
      jwt: jwt,
      doFinally: doFinally,
      signal: signal,
    });
  };
  getUserDetails(jwt, doFinally, signal) {
    this.requester.get({
      url: 'details',
      jwt: jwt,
      doFinally: doFinally,
      signal: signal,
    });
  };
  save(jwt, user, doFinally, signal) {
    this.requester.post({
      url: '',
      jwt: jwt,
      body: user,
      doFinally: doFinally,
      signal: signal,
    });
  };
  changePassword(jwt, changePasswordDto, doFinally) {
    this.requester.post({
      url: 'change-password',
      jwt: jwt,
      body: changePasswordDto,
      doFinally: doFinally,
    });
  }
  delete(jwt, doFinally, signal) {
    this.requester.delete({
      url: '',
      jwt: jwt,
      doFinally: doFinally,
      signal: signal,
    });
  };
}

export default UserRequester;