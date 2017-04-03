import authRepositoryService from '../services/authRepositoryService';
import {
  authRequest,
  authSuccess,
  authFailure,
  loginSuccess
} from '../actions/auth';
import { PATH } from '../constants/application';

export class LoginUsecase {
  constructor({ authRepositoryService }) {
    this.authRepositoryService = authRepositoryService;
  }

  execute(push, dispatch, { userName, password }) {
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
