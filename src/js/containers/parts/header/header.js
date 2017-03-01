import React from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/parts/button/button';
import Icon from '../../../components/parts/icon/icon';

const HeaderContainer = ({ account }) => (
  <header className="o-header">
    <Button to="/" hover="opacity"><Icon name="logo2" /></Button>

    <div className="o-header-nav">
      {account.authenticated ?
        <p>hoge</p>
      :
        <Button to="/login" modifier="theme-secondary size-s">ログイン</Button>
      }
    </div>
  </header>
);

export default connect(state => ({
  account: state.auth.account
}))(HeaderContainer);
