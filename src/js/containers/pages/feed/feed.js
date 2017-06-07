import React from 'react';

import { PATH } from '../../../constants/application';

export default class Feed extends React.Component {
  static getRedirectUrl(renderProps, store) {
    const auth = store.getState().auth;
    return auth.authenticated ? null : `/${PATH.RANKING}`;
  }

  render() {
    return <div>feed</div>;
  }
}
