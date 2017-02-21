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

    if (this.props.signUp.isFetching) {
      return;
    }

    const mailaddress = e.target.mailaddress.value.trim();

    if (mailaddress) {
      SignUpUseCaseFactory.create().execute(this.props.dispatch, mailaddress);
    }
  }

  render() {
    return (
      <SignUp
        request={this.props.signUp}
        handleSubmitForm={this.handleSubmitForm}
      />
    );
  }
}

export default connect(state => ({
  signUp: state.signUp
}))(SignUpContainer);
