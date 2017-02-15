import React from 'react';
import Auth from '../components/ui/templates/auth/auth';

export default class Login extends React.Component {

  componentDidMount() {
    console.log('hoge');
  }

  render() {
    return (
      <Auth
        authButton={{
          to: '/signup',
          text: '新規登録'
        }}
        form={{
          title: 'ログイン',
          list: [
            {
              label: 'メールアドレス',
              name: 'MailAddress',
              placeholder: 'メールアドレスを入力'
            },
            {
              label: 'パスワード',
              name: 'password',
              placeholder: 'パスワードを入力'
            }
          ],
          submitText: 'ログイン'
        }}
      />
    );
  }
}
