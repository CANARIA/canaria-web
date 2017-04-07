import React from 'react';

import { PATH } from '../../../constants/application';

export default class Feed extends React.Component {
  static getRedirectUrl(store) {
    const auth = store.getState().auth;
    return auth.authenticated ? null : `/${PATH.LOGIN}`;
  }

  render() {
    return <div>feed</div>;
  }
}
