import { PATH } from '../constants/application';
import {
  registerTokenValid,
  registerTokenInvalid,
} from '../actions/auth';
import authRepositoryService from '../services/authRepositoryService';

export class CheckRegisterTokenUsecase {
  constructor({ authRepositoryService }) {
    this.authRepositoryService = authRepositoryService;
  }

  execute(router, dispatch, registerToken) {
    return new Promise((resolve) => {
      if (registerToken) {
        this.authRepositoryService.checkRegisterToken(registerToken)
        .then(() => dispatch(registerTokenValid()))
        .catch(err => dispatch(registerTokenInvalid(err)))
        .then(resolve);
      } else {
        router.replace(PATH.SIGNUP);
        resolve();
      }
    });
  }
}

export class CheckRegisterTokenUsecaseFactory {
  static create() {
    return new CheckRegisterTokenUsecase({ authRepositoryService });
  }
}
