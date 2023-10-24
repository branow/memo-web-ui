import axios from 'axios';
import requestError from './request-error';

function request(config) {
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

function Requester(relativeUrl) {
  this.get = (config) => {
    request({
      url: joinUrl([baseUrl, relativeUrl, config.utl, config.param]),
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization' : 'bearer ' + config.jwt,
      },
      success: config.success,
      fail: config.fail,
      error: requestError,
    });
  };
  this.post = (config) => {
    request({
      url: joinUrl([baseUrl, relativeUrl, config.utl, config.param]),
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization' : 'bearer ' + config.jwt,
      },
      body: JSON.stringify(config.body),
      success: config.success,
      fail: config.fail,
      error: requestError,
    });
  };
  this.delete = (config) => {
    request({
      url: joinUrl([baseUrl, relativeUrl, config.utl, config.param]),
      method: 'DELETE',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization' : 'bearer ' + config.jwt,
      },
      success: config.success,
      fail: config.fail,
      error: requestError,
    });
  }
}

function joinUrl(urlPars) {
  return urlPars.join('/');
}

export {request, Requester};

