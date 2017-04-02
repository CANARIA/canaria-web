import authRepositoryService from '../services/authRepositoryService';
import {
  authRequest,
  authSuccess,
  authFailure,
  loginSuccess
} from '../actions/auth';
import { PATH } from '../constants/application';

// import cookieGateway from '../gateways/cookieGateway';
// import { TOKEN_KEY, JWT_KEY } from '../constants/cookie';

export class LoginUsecase {
  constructor({ authRepositoryService }) {
    this.authRepositoryService = authRepositoryService;
  }

  execute(push, dispatch, { userName, password }) {
    dispatch(authRequest());

    this.authRepositoryService.login({ user_name: userName, password })
    .then(({ headers, data }) => {
      const { access_token, authorization } = headers;

      console.log(access_token);
      console.log(authorization);
      console.log(data);
      // cookieGateway.save(TOKEN_KEY, access_token);
      // cookieGateway.save(JWT_KEY, authorization);

      dispatch(authSuccess());
      dispatch(loginSuccess({
        access_token,
        jwt: authorization,
        user: data
      }));
      push(PATH.FEED);
    })
    .catch(err => dispatch(authFailure(err)));
  }
}

export class LoginUsecaseFactory {
  static create() {
    return new LoginUsecase({ authRepositoryService });
  }
}
