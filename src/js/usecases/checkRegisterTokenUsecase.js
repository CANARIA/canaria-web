import authRepositoryService from '../services/authRepositoryService';
import {
  registerTokenValid,
  registerTokenInvalid
} from '../actions/auth';

export class CheckRegisterTokenUsecase {
  constructor({ authRepositoryService }) {
    this.authRepositoryService = authRepositoryService;
  }

  execute(dispatch, register_token) {
    this.authRepositoryService.checkRegisterToken(register_token)
    .then(() => dispatch(registerTokenValid()))
    .catch(err => dispatch(registerTokenInvalid(err)));
  }
}

export class CheckRegisterTokenUseCaseFactory {
  static create() {
    return new CheckRegisterTokenUsecase({ authRepositoryService });
  }
}
