import axios from 'axios';
import { TIMEOUT, ERROR } from '../constants/application';
import assign from '../helpers/assign';

export class HttpClientGateway {
  post(url, data, headers = {}) {
    return new Promise((resolve, reject) => {
      axios({
        url,
        data,
        method: 'post',
        headers: assign(headers, { 'Content-Type': 'application/json' }),
        timeout: TIMEOUT
      })
      .then(({ headers, data }) => resolve({ headers, data }))
      .catch((err) => {
        if (!err.response) {
          return reject(ERROR.CONNECTION);
        }
        return reject(err.response.data.message);
      });
    });
  }
}

export default new HttpClientGateway();
