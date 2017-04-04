import React from 'react';

import { PATH } from '../../../constants/application';
import Button from '../button/button';
import Icon from '../icon/icon';
import Column from '../column/column';
import TextButton from '../textButton/textButton';

export default class Footer extends React.Component {
  constructor(...args) {
    super(...args);
    this.year = new Date().getFullYear();
  }

  render() {
    return (
      <footer className="c-footer">
        <div className="c-footer-top">
          <Button to={`/${PATH.FEED}`} hover="opacity"><Icon name="logo2" /></Button>
        </div>

        <div className="c-footer-bottom">
          <p className="c-footer-copy">© {this.year} canaria</p>

          <Column
            iteratorKey="footer"
            list={[
              <TextButton to={`/${PATH.TERMS}`} modifier="theme-secondary size-m">利用規約</TextButton>,
              <TextButton to={`/${PATH.PRIVACY}`} modifier="theme-secondary size-m">プライバシー</TextButton>,
              <TextButton to={`/${PATH.HELP}`} modifier="theme-secondary size-m">ヘルプ</TextButton>,
              <TextButton modifier="theme-secondary size-m">フィードバック</TextButton>
            ]}
            modifier="size-s"
          />
        </div>
      </footer>
    );
  }
}
