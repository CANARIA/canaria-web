import React from 'react';
import { connect } from 'react-redux';

import { CheckRegisterTokenUseCaseFactory } from '../../usecases/checkRegisterTokenUsecase';
import { RegisterUseCaseFactory } from '../../usecases/registerUsecase';
import RegisterComponent from '../../components/pages/register/register';

class RegisterContainer extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  componentWillMount() {
    const { register_token } = this.props.location.query;

    if (register_token) {
      CheckRegisterTokenUseCaseFactory.create().execute(this.props.dispatch, register_token);
    } else {
      this.props.router.replace('/');
    }
  }

  handleSubmitForm(e) {
    e.preventDefault();

    const target = e.target;
    const userName = target.user_name.value.trim();
    const password = target.password.value.trim();
    const passwordConfirm = target.password_confirm.value.trim();

    const { location, router, dispatch } = this.props;
    const registerToken = location.query.register_token;

    if (userName && password && passwordConfirm) {
      RegisterUseCaseFactory.create().execute(router.push, dispatch, {
        userName,
        password,
        passwordConfirm,
        registerToken
      });
    }
  }

  render() {
    const { auth } = this.props;

    if (!auth.tokenChecked) {
      return null;
    }

    return (
      <RegisterComponent
        auth={auth}
        handleSubmitForm={this.handleSubmitForm}
      />
    );
  }
}

export default connect(state => ({
  auth: state.register
}))(RegisterContainer);
