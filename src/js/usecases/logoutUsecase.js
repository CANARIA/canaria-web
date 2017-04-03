import authRepositoryService from '../services/authRepositoryService';
import { logout } from '../actions/auth';
import { PATH } from '../constants/application';

export class LogoutUsecase {
  constructor({ authRepositoryService }) {
    this.authRepositoryService = authRepositoryService;
  }

  execute(push, dispatch) {
    this.authRepositoryService.logout();
    dispatch(logout());
    push(PATH.LOGIN);
  }
}

export class LogoutUsecaseFactory {
  static create() {
    return new LogoutUsecase({ authRepositoryService });
  }
}
