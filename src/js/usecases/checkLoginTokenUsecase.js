import authRepositoryService from '../services/authRepositoryService';
import {
  authInitialize,
  loginSuccess
} from '../actions/auth';

import cookieGateway from '../gateways/cookieGateway';
import { TOKEN_KEY, JWT_KEY } from '../constants/cookie';

export class CheckLoginTokenUsecase {
  constructor({ authRepositoryService }) {
    this.authRepositoryService = authRepositoryService;
  }

  execute(dispatch) {
    const access_token = cookieGateway.load(TOKEN_KEY);
    const Authorization = cookieGateway.load(JWT_KEY);

    if (!access_token || !Authorization) {
      dispatch(authInitialize());
      return;
    }

    this.authRepositoryService.checkLoginToken({ access_token, Authorization })
    .then(({ data }) => {
      dispatch(loginSuccess({
        access_token,
        jwt: Authorization,
        user: data
      }));
    })
    .catch(() => {
      cookieGateway.remove(TOKEN_KEY);
      cookieGateway.remove(JWT_KEY);
      dispatch(authInitialize());
    });
  }
}

export class checkLoginTokenUsecaseFactory {
  static create() {
    return new CheckLoginTokenUsecase({ authRepositoryService });
  }
}
