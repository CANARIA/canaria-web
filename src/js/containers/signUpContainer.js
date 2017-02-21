import React from 'react';
import { connect } from 'react-redux';

import { SignUpUseCaseFactory } from '../usecases/signUpUsecase';
import SignUp from '../components/pages/signUp/signUp';

class SignUpContainer extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm(e) {
    e.preventDefault();

    const mailaddress = e.target.mailaddress.value.trim();

    if (mailaddress) {
      SignUpUseCaseFactory.create().execute(this.props.dispatch, mailaddress);
    }
  }

  render() {
    return (
      <SignUp
        auth={this.props.auth}
        handleSubmitForm={this.handleSubmitForm}
      />
    );
  }
}

export default connect(state => ({
  auth: state.signUp
}))(SignUpContainer);
