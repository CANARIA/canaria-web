import React from 'react';
import { connect } from 'react-redux';

import { initializeApp } from '../../actions/application';
import { CheckRegisterTokenUseCaseFactory } from '../../usecases/checkRegisterTokenUsecase';
import { RegisterUseCaseFactory } from '../../usecases/registerUsecase';
import RegisterComponent from '../../components/pages/register/register';

const _checkRegisterToken = (props, dispatch) => {
  const { register_token } = props.location.query;

  if (register_token) {
    CheckRegisterTokenUseCaseFactory.create().execute(dispatch, register_token);
  } else {
    props.router.replace('/');
  }
};

class RegisterContainer extends React.Component {

  static fetchData(renderProps, dispatch) {
    _checkRegisterToken(renderProps, dispatch);
    return dispatch(initializeApp());
  }

  constructor(props) {
    super(props);

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  componentWillMount() {
    const { application, dispatch } = this.props;

    if (!application.isInitialized) {
      _checkRegisterToken(this.props, dispatch);
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

    if (!auth.isTokenChecked) {
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
  application: state.application,
  auth: state.auth.flow.register
}))(RegisterContainer);
