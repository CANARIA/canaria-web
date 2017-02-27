import authRepositoryService from '../services/authRepositoryService';
import {
  signUpRequest,
  signUpSuccess,
  signUpFailure
} from '../actions/auth';
import dialog from '../components/modules/dialog';

export class SignUpUsecase {
  constructor({ authRepositoryService }) {
    this.authRepositoryService = authRepositoryService;
  }

  execute(dispatch, mailaddress) {
    dispatch(signUpRequest());

    this.authRepositoryService.sendMail(mailaddress)
    .then(() => {
      dispatch(signUpSuccess());
      return dialog('メールを送信しました。', { accept: '閉じる' });
    })
    .catch(err => dispatch(signUpFailure(err)));
  }
}

export class SignUpUseCaseFactory {
  static create() {
    return new SignUpUsecase({ authRepositoryService });
  }
}
