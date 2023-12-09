import { Requester } from "./request";

class ModuleRequester {
  constructor() {
    this.requester = new Requester('module');
  }
  getModuleCollectionAll(jwt, doFinally, signal) {
    this.requester.get({
      url: 'collection',
      jwt: jwt,
      doFinally: doFinally,
      signal: signal,
    });
  };
  getModuleGeneralDetails(moduleId, doFinally, signal) {
    this.requester.get({
      url: 'general-details/' + moduleId,
      doFinally: doFinally,
      signal: signal,
    });
  };
  getModuleDetails(jwt, modueId, doFinally, signal) {
    this.requester.get({
      url: 'details/' + modueId,
      jwt: jwt,
      doFinally: doFinally,
      signal: signal,
    });
  };
  save(jwt, module, doFinally, signal) {
    this.requester.post({
      url: '',
      jwt: jwt,
      body: module,
      doFinally: doFinally,
      signal: signal,
    });
  };
  delete(jwt, moduleId, doFinally, signal) {
    this.requester.delete({
      url: '' + moduleId,
      jwt: jwt,
      doFinally: doFinally,
      signal: signal,
    });
  };
}

export default ModuleRequester;