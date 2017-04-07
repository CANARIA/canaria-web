import validatorService from '../services/validatorService';
import authRepositoryService from '../services/authRepositoryService';
import {
  authRequest,
  authSuccess,
  authFailure
} from '../actions/auth';
import dialog from '../components/modules/dialog';

export class SignUpUsecase {
  constructor({ authRepositoryService, validatorService }) {
    this.authRepositoryService = authRepositoryService;
    this.validatorService = validatorService;
  }

  execute(dispatch, mailaddress) {
    const validation = this.validatorService.filter({ email: mailaddress });
    const error = validation.filter(item => !item.valid).map(item => item.error).join('\n');

    if (error) return dispatch(authFailure(error));

    dispatch(authRequest());

    return this.authRepositoryService.sendMail(mailaddress)
    .then(() => dialog('メールを送信しました。', { accept: '閉じる' }))
    .then(() => dispatch(authSuccess()))
    .catch(err => dispatch(authFailure(err)));
  }
}

export class SignUpUsecaseFactory {
  static create() {
    return new SignUpUsecase({ authRepositoryService, validatorService });
  }
}
