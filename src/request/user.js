import { Requester } from "./request";

class UserRequester {
  constructor() {
    this.requester = new Requester('user');
  }
  getUserPrivateGeneralDetails(jwt, doFinally) {
    this.requester.get({
      url: 'private-general-details',
      jwt: jwt,
      doFinally: doFinally,
    });
  };
  getUserPublicGeneralDetails(userId, doFinally) {
    this.requester.get({
      url: 'public-general-details/' + userId,
      doFinally: doFinally,
    });
  };
  getUserPrivateShortDetails(jwt, doFinally) {
    this.requester.get({
      url: 'private-short-details',
      jwt: jwt,
      doFinally: doFinally,
    });
  };
  getUserDetails(jwt, doFinally) {
    this.requester.get({
      url: 'details',
      jwt: jwt,
      doFinally: doFinally,
    });
  };
  save(jwt, user, doFinally) {
    this.requester.post({
      url: '',
      jwt: jwt,
      body: user,
      doFinally: doFinally,
    });
  };
  delete(jwt, doFinally) {
    this.requester.delete({
      url: '',
      jwt: jwt,
      doFinally: doFinally,
    });
  };
}

export default UserRequester;