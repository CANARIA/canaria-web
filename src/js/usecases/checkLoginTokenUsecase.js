import authRepositoryService from '../services/authRepositoryService';

import cookieGateway from '../gateways/cookieGateway';
import { TOKEN_KEY, JWT_KEY } from '../constants/cookie';

export class CheckLoginTokenUsecase {
  constructor({ authRepositoryService }) {
    this.authRepositoryService = authRepositoryService;
  }

  execute() {
    const access_token = cookieGateway.load(TOKEN_KEY);
    const Authorization = cookieGateway.load(JWT_KEY);

    this.authRepositoryService.checkLoginToken({ access_token, Authorization })
    .then(({ data }) => {
      console.log('成功ーー');
      console.log(data);
      console.log('成功ーー');
    })
    .catch((err) => {
      console.log('失敗ーー');
      console.log(err);
      console.log('失敗ーー');
    });
  }
}

export class checkLoginTokenUseCaseFactory {
  static create() {
    return new CheckLoginTokenUsecase({ authRepositoryService });
  }
}
