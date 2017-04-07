import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { SignUpUsecaseFactory } from '../../../usecases/signUpUsecase';

import Box from '../../../components/parts/box/box';
import Field from '../../../components/parts/field/field';
import Button from '../../../components/parts/button/button';
import Error from '../../../components/parts/error/error';

class SignUp extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  }

  constructor(...args) {
    super(...args);

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm(e) {
    e.preventDefault();

    const mailaddress = e.target.mailaddress.value.trim();

    if (!mailaddress) return;

    SignUpUsecaseFactory.create().execute(this.props.dispatch, mailaddress);
  }

  render() {
    const { auth } = this.props;

    return (
      <Box modifier="theme-clearwhite size-m">
        <form className="p-signUp" onSubmit={this.handleSubmitForm}>
          <h1 className="p-signUp-title">新規登録</h1>

          <ul className="p-signUp-list">
            <li>
              <Field
                name="mailaddress"
                input={{
                  type: 'email',
                  placeholder: 'メールアドレスを入力',
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

          <Button hover="filter" modifier="theme-secondary size-wide size-m" disabled={auth.isFetching}>{auth.isFetching ? '送信中...' : '送信'}</Button>
        </form>
      </Box>
    );
  }
}

export default connect(state => ({
  auth: state.auth
}))(SignUp);
