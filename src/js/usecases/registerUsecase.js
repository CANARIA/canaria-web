import authRepositoryService from '../services/authRepositoryService';
import {
  registerRequest,
  registerSuccess,
  registerFailure
} from '../actions/auth';
import { ERROR } from '../constants/application';
import dialog from '../components/modules/dialog';

export class RegisterUsecase {
  constructor({ authRepositoryService }) {
    this.authRepositoryService = authRepositoryService;
  }

  execute(push, dispatch, { userName, password, passwordConfirm, registerToken }) {
    if (password !== passwordConfirm) {
      return dispatch(registerFailure(ERROR.PASSWORD_CONFIRM));
    }

    dispatch(registerRequest());

    return this.authRepositoryService.register({
      password,
      user_name: userName,
      url_token: registerToken
    })
    .then(() => {
      dispatch(registerSuccess());
      return dialog('ユーザー登録が完了しました。', { accept: 'ログイン画面へ' });
    })
    .then(() => push('/login'))
    .catch(err => dispatch(registerFailure(err.message)));
  }
}

export class RegisterUseCaseFactory {
  static create() {
    return new RegisterUsecase({ authRepositoryService });
  }
}
