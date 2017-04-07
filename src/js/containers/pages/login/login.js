import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { LoginUsecaseFactory } from '../../../usecases/loginUsecase';

import Box from '../../../components/parts/box/box';
import Field from '../../../components/parts/field/field';
import Button from '../../../components/parts/button/button';
import Error from '../../../components/parts/error/error';

class Login extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
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
    const { dispatch, router } = this.props;

    if (!userName || !password) return;

    LoginUsecaseFactory.create().execute(router, dispatch, { userName, password });
  }

  render() {
    const { auth } = this.props;

    return (
      <Box modifier="theme-clearwhite size-m">
        <form className="p-login" onSubmit={this.handleSubmitForm}>
          <h1 className="p-login-title">ログイン</h1>

          <ul className="p-login-list">
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
          </ul>

          {auth.error &&
            <div className="p-login-error">
              <Error modifier="size-m">{auth.error}</Error>
            </div>
          }

          <Button hover="filter" modifier="theme-secondary size-wide size-m" disabled={auth.isFetching}>{auth.isFetching ? '送信中...' : 'ログイン'}</Button>
        </form>
      </Box>
    );
  }
}

export default connect(state => ({
  auth: state.auth
}))(Login);
