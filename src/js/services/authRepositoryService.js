import { API_ROOT } from '../constants/application';
import httpClientGateway from '../gateways/httpClientGateway';

const AUTH_ENDPOINT = `${API_ROOT}/auth`;

export class AuthRepositoryService {
  sendMail(mailaddress) {
    return new Promise((resolve, reject) => {
      httpClientGateway.post(`${AUTH_ENDPOINT}/preregister`, { mailaddress })
      .then(() => resolve('メールを送信しました。'))
      .catch(err => reject(err));
    });
  }
}

export default new AuthRepositoryService();
