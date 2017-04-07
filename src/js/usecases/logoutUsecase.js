import authRepositoryService from '../services/authRepositoryService';

export class LogoutUsecase {
  constructor({ authRepositoryService }) {
    this.authRepositoryService = authRepositoryService;
  }

  execute() {
    this.authRepositoryService.logout();
  }
}

export class LogoutUsecaseFactory {
  static create() {
    return new LogoutUsecase({ authRepositoryService });
  }
}
