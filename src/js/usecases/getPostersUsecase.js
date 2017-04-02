import posterRepositoryService from '../services/posterRepositoryService';
import { getPosters } from '../actions/poster';

export class GetPostersUsecase {
  constructor({ posterRepositoryService }) {
    this.posterRepositoryService = posterRepositoryService;
  }

  async execute(dispatch) {
    const posters = await this.posterRepositoryService.get().catch(() => []);
    dispatch(getPosters(posters));
  }
}

export class GetPostersUsecaseFactory {
  static create() {
    return new GetPostersUsecase({ posterRepositoryService });
  }
}
