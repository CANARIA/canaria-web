import { PATH } from '../constants/application';
import {
  authRequest,
  authSuccess,
  authFailure,
  loginSuccess
} from '../actions/auth';
import authRepositoryService from '../services/authRepositoryService';

export class LoginUsecase {
  constructor({ authRepositoryService }) {
    this.authRepositoryService = authRepositoryService;
  }

  execute(router, dispatch, { userName, password }) {
    dispatch(authRequest());

    this.authRepositoryService.login({ user_name: userName, password })
    .then(({ headers, data }) => {
      const { access_token, authorization } = headers;

      dispatch(authSuccess());
      dispatch(loginSuccess({
        access_token,
        jwt: authorization,
        user: data
      }));
      router.push(PATH.FEED);
    })
    .catch(err => dispatch(authFailure(err)));
  }
}

export class LoginUsecaseFactory {
  static create() {
    return new LoginUsecase({ authRepositoryService });
  }
}
