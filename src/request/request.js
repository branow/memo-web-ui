import axios from 'axios';

function request(config) {
  console.log(config);
  axios({
    url: config.url,
    method: config.method,
    headers: config.headers,
    data: config.body,
    signal: config.signal,
  }).then(response => {
    if (response.status > 199 && response.status < 300) {
      config.doFinally.success.do(response);
    } else {
      config.doFinally.fail.do(response);
    }
  }).catch(error => {
    console.log(error);
    if (error.response && error.response.data) {
      config.doFinally.error.do(error.response.data);
    } else {
      config.doFinally.error.do(error.message);
    }
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
      headers: buildHeaders(null, config.jwt),
      doFinally: config.doFinally,
      signal: config.signal,
    });
  };
  post(config) {
    request({
      url: joinUrl(baseUrl, this.relativeUrl, config.url, config.param),
      method: 'POST',
      headers: buildHeaders('application/json', config.jwt),
      body: JSON.stringify(config.body),
      doFinally: config.doFinally,
      signal: config.signal,
    });
  };
  delete(config){
    request({
      url: joinUrl(baseUrl, this.relativeUrl, config.url, config.param),
      method: 'DELETE',
      headers: buildHeaders(null, config.jwt),
      doFinally: config.doFinally,
      signal: config.signal,
    });
  };
}


function buildHeaders(contentType, jwt) {
  const headers = {};
  headers['Access-Control-Allow-Origin'] = '*';
  if (contentType && contentType !== undefined) {
    headers['Content-Type'] = contentType;
  }
  if (jwt && jwt !== undefined) {
    headers['Authorization'] = 'bearer ' + jwt;
  }
  return headers;
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
    url += '?' + param.join('&');
  }
  return url;
}

export {request, Requester};

