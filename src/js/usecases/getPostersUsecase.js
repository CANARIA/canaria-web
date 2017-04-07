import { getPosters } from '../actions/poster';
import posterRepositoryService from '../services/posterRepositoryService';

export class GetPostersUsecase {
  constructor({ posterRepositoryService }) {
    this.posterRepositoryService = posterRepositoryService;
  }

  async execute(dispatch) {
    return new Promise(async (resolve) => {
      const posters = await this.posterRepositoryService.get().catch(() => []);
      dispatch(getPosters(posters));
      resolve();
    });
  }
}

export class GetPostersUsecaseFactory {
  static create() {
    return new GetPostersUsecase({ posterRepositoryService });
  }
}
