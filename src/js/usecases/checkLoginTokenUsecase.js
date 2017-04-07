import {
  authInitialize,
  loginSuccess
} from '../actions/auth';
import authRepositoryService from '../services/authRepositoryService';

export class CheckLoginTokenUsecase {
  constructor({ authRepositoryService }) {
    this.authRepositoryService = authRepositoryService;
  }

  execute(dispatch) {
    return new Promise((resolve) => {
      const { access_token, Authorization } = this.authRepositoryService.getLoginToken();

      if (!access_token || !Authorization) {
        dispatch(authInitialize());
        return resolve();
      }

      return this.authRepositoryService.checkLoginToken({ access_token, Authorization })
      .then(({ data }) => dispatch(loginSuccess({
        access_token,
        jwt: Authorization,
        user: data
      })))
      .catch(() => {
        this.authRepositoryService.logout();
        dispatch(authInitialize());
      })
      .then(resolve);
    });
  }
}

export class checkLoginTokenUsecaseFactory {
  static create() {
    return new CheckLoginTokenUsecase({ authRepositoryService });
  }
}
