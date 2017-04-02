import authRepositoryService from '../services/authRepositoryService';
import {
  registerTokenValid,
  registerTokenInvalid
} from '../actions/auth';

export class CheckRegisterTokenUsecase {
  constructor({ authRepositoryService }) {
    this.authRepositoryService = authRepositoryService;
  }

  execute(dispatch, registerToken) {
    this.authRepositoryService.checkRegisterToken(registerToken)
    .then(() => dispatch(registerTokenValid()))
    .catch(err => dispatch(registerTokenInvalid(err)));
  }
}

export class CheckRegisterTokenUsecaseFactory {
  static create() {
    return new CheckRegisterTokenUsecase({ authRepositoryService });
  }
}
