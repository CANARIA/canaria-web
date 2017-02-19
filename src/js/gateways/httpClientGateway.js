require('isomorphic-fetch');

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
      fetch(uri, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(checkStatus)
      .then(parseJSON)
      .then(() => resolve('メールを送信しました。'))
      .catch(err => reject(err));
    });
  }
}

export default new HttpClientGateway();
