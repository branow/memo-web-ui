import axios from 'axios';

function request(config) {
  console.log(config);
  axios({
    url: config.url,
    method: config.method,
    headers: config.headers,
    data: config.body,
  }).then(response => {
    if (response.status > 199 && response.status < 300) {
      config.doFinally.success.do(response);
    } else {
      config.doFinally.fail.do(response);
    }
  }).catch(e => {
    config.doFinally.error.do(e);
  });
}

const baseUrl = 'http://localhost:8080';

class Requester {
  constructor(relativeUrl) {
    this.relativeUrl = relativeUrl;
  }
  get(config) {
    request({
      url: joinUrl(baseUrl, this.relativeUrl, config.url, config.param),
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'bearer ' + config.jwt,
      },
      doFinally: config.doFinally,
    });
  };
  post(config) {
    request({
      url: joinUrl(baseUrl, this.relativeUrl, config.url, config.param),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'bearer ' + config.jwt,
      },
      body: JSON.stringify(config.body),
      doFinally: config.doFinally,
    });
  };
  delete(config){
    request({
      url: joinUrl(baseUrl, this.relativeUrl, config.url, config.param),
      method: 'DELETE',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'bearer ' + config.jwt,
      },
      doFinally: config.doFinally,
    });
  };
}

function joinUrl(base, relative, spec, param) {
  let url = base;
  if (relative) {
    url += '/' + relative;
  }
  if (spec) {
    url += '/' + spec;
  }
  if (param) {
    url += '?' + param;
  }
  return url;
}

export {request, Requester};

