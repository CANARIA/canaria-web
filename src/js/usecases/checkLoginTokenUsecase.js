import authRepositoryService from '../services/authRepositoryService';
import {
  loginSuccess,
  loginFailure
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

    this.authRepositoryService.checkLoginToken({ access_token, Authorization })
    .then(({ data }) => {
      dispatch(loginSuccess({
        access_token,
        jwt: Authorization,
        user: data
      }));
    })
    .catch(() => dispatch(loginFailure()));
  }
}

export class checkLoginTokenUseCaseFactory {
  static create() {
    return new CheckLoginTokenUsecase({ authRepositoryService });
  }
}
