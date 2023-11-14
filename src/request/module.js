import { Requester } from "./request";

class ModuleRequester {
  constructor() {
    this.requester = new Requester('module');
  }
  getModuleGeneralDetails(moduleId, doFinally) {
    this.requester.get({
      url: 'general-details/' + moduleId,
      doFinally: doFinally,
    });
  };
  getModuleDetails(modueId, doFinally) {
    this.requester.get({
      url: 'details/' + modueId,
      doFinally: doFinally,
    });
  };
  save(jwt, module, doFinally) {
    this.requester.post({
      url: '',
      jwt: jwt,
      body: module,
      doFinally: doFinally,
    });
  };
  delete(jwt, moduleId, doFinally) {
    this.requester.delete({
      url: '' + moduleId,
      jwt: jwt,
      doFinally: doFinally,
    });
  };
}

export default ModuleRequester;