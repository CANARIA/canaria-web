import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { PATH } from '../../../constants/application';

export default class Navi extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  }

  constructor(...args) {
    super(...args);

    this.list = [
      {
        name: 'フィード',
        url: PATH.FEED
      },
      {
        name: 'ランキング',
        url: PATH.RANKING
      },
      {
        name: '新着',
        url: PATH.NEW
      },
      {
        name: 'タグ',
        url: PATH.TAG
      }
    ];
  }

  _renderItem(item) {
    const { auth, location } = this.props;
    let additionClass = '';

    if (item.url === PATH.FEED) {
      additionClass += location.pathname === `/${item.url}` ? ' is-active' : '';
      additionClass += !auth.authenticated ? ' is-hidden' : '';
    } else {
      additionClass += location.pathname.includes(`/${item.url}`) ? ' is-active' : '';
    }

    return <li key={`navi-${item.url}`}><Link className={`c-navi-link${additionClass}`} to={`/${item.url}`}>{item.name}</Link></li>
  }

  render() {
    return (
      <ul className="c-navi">
        {this.list.map(item => this._renderItem(item))}
      </ul>
    );
  }
}
