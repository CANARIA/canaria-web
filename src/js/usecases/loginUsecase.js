import authRepositoryService from '../services/authRepositoryService';
import {
  loginRequest,
  loginSuccess,
  loginFailure
} from '../actions/auth';

export class LoginUsecase {
  constructor({ authRepositoryService }) {
    this.authRepositoryService = authRepositoryService;
  }

  execute(dispatch, { userName, password }) {
    dispatch(loginRequest());

    return this.authRepositoryService.login({ user_name: userName, password })
    .then(data => {
      console.log(data);
      dispatch(loginSuccess());
    })
    .catch(err => dispatch(loginFailure(err)));
  }
}

export class LoginUseCaseFactory {
  static create() {
    return new LoginUsecase({ authRepositoryService });
  }
}
