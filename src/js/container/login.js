import React from 'react';
import Auth from '../components/ui/pages/auth/auth';

export default class Login extends React.Component {

  componentDidMount() {
    console.log('hoge');
  }

  render() {
    return (
      <Auth
        anotherAuth={{
          to: '/signup',
          text: '新規登録'
        }}
        form={{
          title: 'ログイン',
          fieldList: [
            {
              error: '',
              name: 'mailaddress',
              label: 'メールアドレス',
              input: {
                type: 'text',
                placeholder: 'メールアドレスを入力'
              }
            },
            {
              error: '',
              name: 'password',
              label: 'パスワード',
              input: {
                type: 'password',
                placeholder: 'パスワードを入力'
              }
            }
          ],
          submitText: 'ログイン'
        }}
      />
    );
  }
}
