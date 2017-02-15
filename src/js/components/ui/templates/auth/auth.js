import React from 'react';
import AuthHeader from '../../organisms/authHeader/authHeader';
import AuthFooter from '../../organisms/authFooter/authFooter';
import AuthForm from '../../organisms/authForm/authForm';

export default class Auth extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { authButton, form } = this.props;

    return (
      <div className="l-auth">
        <div className="l-auth-head">
          <AuthHeader authButton={authButton} />
        </div>

        <div className="l-auth-main">
          <AuthForm form={form} />
        </div>

        <div className="l-auth-foot">
          <AuthFooter />
        </div>
      </div>
    );
  }
}




