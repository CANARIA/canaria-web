import authRepositoryService from '../services/authRepositoryService';
import {
  loginRequest,
  loginSuccess,
  loginFailure
} from '../actions/auth';

import cookieGateway from '../gateways/cookieGateway';
import { TOKEN_KEY, JWT_KEY } from '../constants/cookie';

export class LoginUsecase {
  constructor({ authRepositoryService }) {
    this.authRepositoryService = authRepositoryService;
  }

  execute(dispatch, { userName, password }) {
    dispatch(loginRequest());

    return this.authRepositoryService.login({ user_name: userName, password })
    .then(({ headers, data }) => {
      const { access_token, authorization } = headers;

      cookieGateway.save(TOKEN_KEY, access_token);
      cookieGateway.save(JWT_KEY, authorization);

      dispatch(loginSuccess({
        access_token,
        jwt: authorization,
        user: data
      }));
    })
    .catch(err => dispatch(loginFailure(err)));
  }
}

export class LoginUseCaseFactory {
  static create() {
    return new LoginUsecase({ authRepositoryService });
  }
}
