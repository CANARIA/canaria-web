import React from 'react';
import Auth from '../components/ui/pages/auth/auth';

export default class SignUp extends React.Component {

  componentDidMount() {
    console.log('hoge');
  }

  render() {
    return (
      <Auth
        anotherAuth={{
          to: '/login',
          text: 'ログイン'
        }}
        form={{
          title: '新規登録',
          fieldList: [{
            error: '',
            name: 'mailaddress',
            input: {
              type: 'text',
              placeholder: 'メールアドレスを入力'
            }
          }],
          submitText: '送信'
        }}
      />
    );
  }
}
