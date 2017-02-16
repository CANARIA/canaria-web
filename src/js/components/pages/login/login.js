import React from 'react';
import AuthHeader from '../../parts/organisms/authHeader/authHeader';
import AuthFooter from '../../parts/organisms/authFooter/authFooter';
import AuthForm from '../../parts/organisms/authForm/authForm';

const Login = () => (
  <div className="p-auth">
    <div className="p-auth-head">
      <AuthHeader anotherAuth={{ to: '/signup', text: '新規登録' }} />
    </div>

    <div className="p-auth-main">
      <AuthForm
        title="ログイン"
        submitText="ログイン"
        fieldList={[
          {
            error: '',
            name: 'mailaddress',
            label: 'メールアドレス',
            input: {
              type: 'email',
              placeholder: 'メールアドレスを入力',
              required: true
            }
          },
          {
            error: '',
            name: 'password',
            label: 'パスワード',
            input: {
              type: 'password',
              placeholder: 'パスワードを入力',
              required: true
            }
          }
        ]}
      />
    </div>

    <div className="p-auth-foot">
      <AuthFooter />
    </div>
  </div>
);

export default Login;
