import libFetch from 'isomorphic-fetch';
import { TIMEOUT, ERROR } from '../constants/application';

export function timeout(promise) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { reject(new Error(ERROR.TIMEOUT)); }, TIMEOUT);
    promise.then(resolve, reject);
  });
}

export function handleErrors(response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
}

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function parseJSON(response) {
  return response.json();
}

export class HttpClientGateway {
  post(uri, data) {
    return new Promise((resolve, reject) => {
      timeout(libFetch(uri, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }))
      .then(handleErrors)
      .then(checkStatus)
      .then(parseJSON)
      .then(json => resolve(json))
      .catch((err) => {
        if (err.message === 'Failed to fetch') {
          reject({ message: ERROR.CONNECTION });
        }
        reject(err);
      });
    });
  }
}

export default new HttpClientGateway();
