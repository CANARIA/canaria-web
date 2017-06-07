import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { PATH } from '../../../constants/application';
import {
  registerTokenValid,
  registerTokenInvalid,
} from '../../../actions/auth';
import authRepositoryService from '../../../services/authRepositoryService';
import { RegisterUsecaseFactory } from '../../../usecases/registerUsecase';

import Box from '../../../components/parts/box/box';
import Field from '../../../components/parts/field/field';
import Button from '../../../components/parts/button/button';
import Error from '../../../components/parts/error/error';

const preFetch = (router, dispatch, registerToken) => new Promise((resolve) => {
  if (registerToken) {
    authRepositoryService.checkRegisterToken(registerToken)
    .then(() => dispatch(registerTokenValid()))
    .catch(err => dispatch(registerTokenInvalid(err)))
    .then(resolve);
  } else {
    router.replace(`/${PATH.SIGNUP}`);
    resolve();
  }
});

class Register extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  }

  static preFetch(renderProps, dispatch) {
    const registerToken = renderProps.location.query.register_token;
    return preFetch(renderProps.router, dispatch, registerToken);
  }

  static getRedirectUrl(renderProps) {
    const registerToken = renderProps.location.query.register_token;
    return registerToken ? null : `/${PATH.SIGNUP}`;
  }

  constructor(...args) {
    super(...args);

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm(e) {
    e.preventDefault();

    const target = e.target;
    const userName = target.user_name.value.trim();
    const password = target.password.value.trim();
    const passwordConfirm = target.password_confirm.value.trim();
    const { location, router, dispatch } = this.props;
    const registerToken = location.query.register_token;

    if (!userName || !password || !passwordConfirm) return;

    RegisterUsecaseFactory.create().execute(router, dispatch, { userName, password, passwordConfirm, registerToken });
  }

  render() {
    const { auth } = this.props;

    if (!auth.tokenChecked) {
      return null;
    }

    if (auth.tokenError) {
      return (
        <Box modifier="theme-clearwhite size-m">
          <div className="p-signUp">
            <h1 className="p-signUp-title">エラー</h1>
            <Error modifier="size-m">{auth.tokenError}</Error>
          </div>
        </Box>
      );
    }

    return (
      <Box modifier="theme-clearwhite size-m">
        <form className="p-signUp" onSubmit={this.handleSubmitForm}>
          <h1 className="p-signUp-title">ユーザー登録</h1>

          <ul className="p-signUp-list">
            <li>
              <Field
                label="ユーザー名"
                name="user_name"
                input={{
                  type: 'text',
                  placeholder: 'ユーザー名を入力',
                  required: true,
                }}
              />
            </li>
            <li>
              <Field
                label="パスワード"
                name="password"
                input={{
                  type: 'password',
                  placeholder: 'パスワードを入力',
                  required: true,
                }}
              />
            </li>
            <li>
              <Field
                label="パスワード再入力"
                name="password_confirm"
                input={{
                  type: 'password',
                  placeholder: 'パスワードを再入力',
                  required: true,
                }}
              />
            </li>
          </ul>

          {auth.error &&
            <div className="p-signUp-error">
              <Error modifier="size-m">{auth.error}</Error>
            </div>
          }

          <Button hover="filter" modifier="theme-secondary size-wide size-m" disabled={auth.isFetching}>{auth.isFetching ? '送信中...' : '登録'}</Button>
        </form>
      </Box>
    );
  }
}

export default connect(state => ({
  auth: state.auth
}))(Register);
