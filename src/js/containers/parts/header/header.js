import React from 'react';

import Button from '../../../components/parts/button/button';
import Icon from '../../../components/parts/icon/icon';

export default () => (
  <header className="o-header">
    <Button to="/" hover="opacity"><Icon name="logo2" /></Button>

    <div className="o-header-nav">
      <div>hoge</div>
    </div>
  </header>
);
