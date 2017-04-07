import { ERROR } from '../constants/application';
import {
  authRequest,
  authSuccess,
  authFailure
} from '../actions/auth';
import validatorService from '../services/validatorService';
import authRepositoryService from '../services/authRepositoryService';

import dialog from '../components/modules/dialog';

export class RegisterUsecase {
  constructor({ authRepositoryService, validatorService }) {
    this.authRepositoryService = authRepositoryService;
    this.validatorService = validatorService;
  }

  execute(router, dispatch, { userName, password, passwordConfirm, registerToken }) {
    if (password !== passwordConfirm) return dispatch(authFailure(ERROR.VALIDATE.PASSWORD_CONFIRM));

    const validation = this.validatorService.filter({ userName, password });
    const error = validation.filter(item => !item.valid).map(item => item.error).join('\n');

    if (error) return dispatch(authFailure(error));

    dispatch(authRequest());

    return this.authRepositoryService.register({
      password,
      user_name: userName,
      url_token: registerToken
    })
    .then(() => dialog('ユーザー登録が完了しました。', { accept: 'ログイン画面へ' }))
    .then(() => {
      dispatch(authSuccess());
      router.push('/login');
    })
    .catch(err => dispatch(authFailure(err)));
  }
}

export class RegisterUsecaseFactory {
  static create() {
    return new RegisterUsecase({ authRepositoryService, validatorService });
  }
}
