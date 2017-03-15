import React from 'react';
import { connect } from 'react-redux';

import { LoginUseCaseFactory } from '../../usecases/loginUsecase';
import LoginComponent from '../../components/pages/login/login';

class LoginContainer extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm(e) {
    e.preventDefault();

    const target = e.target;
    const userName = target.user_name.value.trim();
    const password = target.password.value.trim();

    if (userName && password) {
      LoginUseCaseFactory.create().execute(this.props.dispatch, { userName, password });
    }
  }

  render() {
    return (
      <LoginComponent
        auth={this.props.auth}
        handleSubmitForm={this.handleSubmitForm}
      />
    );
  }
}

export default connect(state => ({
  auth: state.auth.flow.login
}))(LoginContainer);
