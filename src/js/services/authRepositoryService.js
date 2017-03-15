import uuid from 'node-uuid';
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
      .then(() => resolve())
      .catch(err => reject(err));
    });
  }

  register(userData) {
    return new Promise((resolve, reject) => {
      httpClientGateway.post(`${AUTH_ENDPOINT}/register`, userData)
      .then(() => resolve())
      .catch(err => reject(err));
    });
  }

  login(userData) {
    const access_token = uuid.v4();
    return new Promise((resolve, reject) => {
      httpClientGateway.post(`${AUTH_ENDPOINT}/login`, userData, { access_token })
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  checkLoginToken(token) {
    return new Promise((resolve, reject) => {
      httpClientGateway.post(`${AUTH_ENDPOINT}/check`, {}, token)
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }
}

export default new AuthRepositoryService();
