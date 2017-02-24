import React from 'react';
import Button from '../../parts/button/button';
import TextButton from '../../parts/textButton/textButton';
import Icon from '../../parts/icon/icon';
import Title from '../../parts/title/title';
import Field from '../../parts/field/field';
import Column from '../../parts/column/column';
import Box from '../../parts/box/box';
import Error from '../../parts/error/error';

const Login = ({
  auth,
  handleSubmitForm
}) => (
  <div className="p-auth">
    <header className="p-auth-label is-head">
      <Button to="/" hover="opacity"><Icon name="logo2" /></Button>

      <Column
        iteratorKey="authHead"
        list={[
          <TextButton to="/ranking" modifier="theme-gray size-m">ランキング</TextButton>,
          <TextButton to="/new" modifier="theme-gray size-m">新着</TextButton>,
          <TextButton to="/tag" modifier="theme-gray size-m">タグ</TextButton>,
          <Button to="/signup" hover="filter" modifier="theme-secondary size-m">新規登録</Button>
        ]}
        modifier="size-m"
      />
    </header>

    <Box modifier="theme-clearwhite size-m">
      <form className="p-auth-form" onSubmit={handleSubmitForm}>
        <div className="p-auth-form__title">
          <Title modifier="theme-gray size-m">ログイン</Title>
        </div>

        <ul className="p-auth-form__list">
          <li>
            <Field
              label="ユーザー名"
              name="user_name"
              input={{
                type: 'text',
                placeholder: 'ユーザー名を入力',
                required: true,
              }}
            />
          </li>
          <li>
            <Field
              label="パスワード"
              name="password"
              input={{
                type: 'password',
                placeholder: 'パスワードを入力',
                required: true,
              }}
            />
          </li>
        </ul>

        {auth.error &&
          <div className="p-auth-form__error">
            <Error modifier="size-m">{auth.error}</Error>
          </div>
        }

        <Button hover="filter" modifier="theme-secondary size-wide size-m" disabled={auth.isFetching}>{auth.isFetching ? '送信中...' : 'ログイン'}</Button>
      </form>
    </Box>

    <footer className="p-auth-label is-foot">
      <Column
        iteratorKey="authFoot"
        list={[
          <TextButton to="/terms" modifier="theme-gray size-m">利用規約</TextButton>,
          <TextButton to="/privacy" modifier="theme-gray size-m">プライバシー</TextButton>,
          <TextButton to="/help" modifier="theme-gray size-m">ヘルプ</TextButton>,
          <TextButton modifier="theme-gray size-m">フィードバック</TextButton>
        ]}
        modifier="size-m"
      />
    </footer>
  </div>
);

export default Login;
