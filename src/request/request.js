import axios from 'axios';
import requestError from './request-error';

function request(config) {
  console.log(config);
  axios({
    url: config.url,
    method: config.method,
    headers: config.headers,
    data: config.body,
  }).then(response => {
    if (response.status > 199 && response.status < 300) {
      config.success(response);
    } else {
      config.fail(response);
    }
  }).catch(e => {
    config.error(e);
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
      success: config.success,
      fail: config.fail,
      error: requestError,
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
      success: config.success,
      fail: config.fail,
      error: requestError,
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
      success: config.success,
      fail: config.fail,
      error: requestError,
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

