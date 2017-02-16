import React from 'react';
import { connect } from 'react-redux';

import { SignUpUseCaseFactory } from '../usecase/signUpUsecase';
import SignUp from '../components/pages/signUp/signUp';

class SignUpContainer extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm(e) {
    e.preventDefault();

    console.log('handleSubmitForm');
    SignUpUseCaseFactory.create().execute(e);
  }

  render() {
    return (
      <SignUp
        handleSubmitForm={this.handleSubmitForm}
      />
    );
  }
}

export default connect()(SignUpContainer);
