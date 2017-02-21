import libFetch from 'isomorphic-fetch';
import { TIMEOUT, ERROR } from '../constants/application';

export function timeout(promise) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { reject(new Error(ERROR.TIMEOUT)); }, TIMEOUT);
    promise.then(resolve, reject);
  });
}

export function createError(response) {
  const error = new Error(response.statusText);
  error.response = response;
  return error;
}

export function handleErrors(response) {
  if (!response.ok) {
    throw createError(response);
  }

  return response;
}

export function checkStatus(response) {
  if (response.status < 200 || response.status >= 300) {
    createError(response);
  }

  return response;
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
        return parseJSON(err.response);
      })
      .then(json => reject(json));
    });
  }
}

export default new HttpClientGateway();
