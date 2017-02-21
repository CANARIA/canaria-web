import authRepositoryService from '../services/authRepositoryService';
import {
  signUpRequest,
  signUpSuccess,
  signUpFailure
} from '../actions/auth';
import dialog from '../components/modules/dialog';

export class RegisterUsecase {
  constructor({ authRepositoryService }) {
    this.authRepositoryService = authRepositoryService;
  }

  execute(dispatch, register_token) {
    console.log('registerUsecase');
    console.log({ register_token });
    // dispatch(signUpRequest(mailaddress));

    // this.authRepositoryService.sendMail(mailaddress)
    // .then(() => {
    //   dispatch(signUpSuccess());
    //   return dialog('メールを送信しました。', { accept: '確認' });
    // })
    // .catch(err => dispatch(signUpFailure(err)));
  }
}

export class RegisterUseCaseFactory {
  static create() {
    return new RegisterUsecase({ authRepositoryService });
  }
}
