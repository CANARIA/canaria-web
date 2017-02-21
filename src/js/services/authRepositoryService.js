import { API_ROOT } from '../constants/application';
import httpClientGateway from '../gateways/httpClientGateway';

const AUTH_ENDPOINT = `${API_ROOT}/auth`;

export class AuthRepositoryService {
  sendMail(mailaddress) {
    return new Promise((resolve, reject) => {
      httpClientGateway.post(`${AUTH_ENDPOINT}/preregister`, { mailaddress })
      .then(() => resolve())
      .catch(err => reject(err));
    });
  }

  checkRegisterToken(register_token) {
    return new Promise((resolve, reject) => {
      httpClientGateway.post(`${AUTH_ENDPOINT}/checktoken`, { url_token: register_token })
      .then(json => resolve(json))
      .catch(err => reject(err));
    });
  }

  register(userData) {
    return new Promise((resolve, reject) => {
      httpClientGateway.post(`${AUTH_ENDPOINT}/register`, userData)
      .then(json => resolve(json))
      .catch(err => reject(err));
    });
  }

  login(userData) {
    return new Promise((resolve, reject) => {
      httpClientGateway.post(`${AUTH_ENDPOINT}/login`, userData)
      .then(json => resolve(json))
      .catch(err => reject(err));
    });
  }
}

export default new AuthRepositoryService();
