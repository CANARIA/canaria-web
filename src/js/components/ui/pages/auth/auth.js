import React from 'react';
import AuthHeader from '../../organisms/authHeader/authHeader';
import AuthFooter from '../../organisms/authFooter/authFooter';
import AuthForm from '../../organisms/authForm/authForm';

export default class Auth extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { anotherAuth, form } = this.props;

    return (
      <div className="p-auth">
        <div className="p-auth-head">
          <AuthHeader anotherAuth={anotherAuth} />
        </div>

        <div className="p-auth-main">
          <AuthForm {...form} />
        </div>

        <div className="p-auth-foot">
          <AuthFooter />
        </div>
      </div>
    );
  }
}




