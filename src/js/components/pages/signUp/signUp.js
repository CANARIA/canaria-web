import React from 'react';
import AuthHeader from '../../parts/organisms/authHeader/authHeader';
import AuthFooter from '../../parts/organisms/authFooter/authFooter';
import AuthForm from '../../parts/organisms/authForm/authForm';

const SignUp = ({
  request,
  handleSubmitForm
}) => (
  <div className="p-auth">
    <div className="p-auth-head">
      <AuthHeader anotherAuth={{ to: '/login', text: 'ログイン' }} />
    </div>

    <div className="p-auth-main">
      <AuthForm
        title="新規登録"
        submitText={request.isFetching ? '送信中...' : '送信'}
        fieldList={[{
          error: '',
          name: 'mailaddress',
          input: {
            type: 'email',
            placeholder: 'メールアドレスを入力',
            required: true
          }
        }]}
        message={request.message}
        onSubmit={handleSubmitForm}
      />
    </div>

    <div className="p-auth-foot">
      <AuthFooter />
    </div>
  </div>
);

export default SignUp;
