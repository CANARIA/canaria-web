import uuid from 'node-uuid';
import { API_ROOT } from '../constants/application';
import { TOKEN_KEY, JWT_KEY } from '../constants/cookie';
import cookieGateway from '../gateways/cookieGateway';
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

  checkRegisterToken(registerToken) {
    return new Promise((resolve, reject) => {
      httpClientGateway.post(`${AUTH_ENDPOINT}/checktoken`, { url_token: registerToken })
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
      .then((data) => {
        const { access_token, authorization } = data.headers;

        cookieGateway.save(TOKEN_KEY, access_token);
        cookieGateway.save(JWT_KEY, authorization);

        resolve(data);
      })
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

  logout() {
    cookieGateway.remove(TOKEN_KEY);
    cookieGateway.remove(JWT_KEY);
  }
}

export default new AuthRepositoryService();
