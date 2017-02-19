import authRepositoryService from '../services/authRepositoryService';
import {
  signUpRequest,
  signUpSuccess,
  signUpFailure
} from '../actions/auth';

export class SignUpUsecase {
  constructor({ authRepositoryService }) {
    this.authRepositoryService = authRepositoryService;
  }

  execute(dispatch, mailaddress) {
    dispatch(signUpRequest(mailaddress));

    this.authRepositoryService.sendMail(mailaddress)
    .then(message => dispatch(signUpSuccess(message)))
    .catch(err => dispatch(signUpFailure(err)));
  }
}

export class SignUpUseCaseFactory {
  static create() {
    return new SignUpUsecase({ authRepositoryService });
  }
}
