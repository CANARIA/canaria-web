import React from 'react';
import Auth from '../components/ui/templates/auth/auth';

export default class SignUp extends React.Component {

  componentDidMount() {
    console.log('hoge');
  }

  render() {
    return (
      <Auth
        authButton={{
          to: '/login',
          text: 'ログイン'
        }}
        form={{
          title: '新規登録',
          list: [{
            name: 'MailAddress',
            placeholder: 'メールアドレスを入力'
          }],
          submitText: '送信'
        }}
      />
    );
  }
}
