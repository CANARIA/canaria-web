import { Component, PropTypes } from 'react';

import {
  authInitialize,
  loginSuccess
} from '../actions/auth';
import authRepositoryService from '../services/authRepositoryService';

const preFetch = dispatch => new Promise((resolve) => {
  const { access_token, Authorization } = authRepositoryService.getLoginToken();

  if (!access_token || !Authorization) {
    dispatch(authInitialize());
    return resolve();
  }

  return authRepositoryService.checkLoginToken({ access_token, Authorization })
  .then(({ data }) => dispatch(loginSuccess({
    access_token,
    jwt: Authorization,
    user: data
  })))
  .catch(() => {
    authRepositoryService.logout();
    dispatch(authInitialize());
  })
  .then(resolve);
});

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  static preFetch(renderProps, dispatch) {
    return preFetch(dispatch);
  }

  render() {
    return this.props.children;
  }
}

/*
import Head from './head';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Head />
        {this.props.children}
      </div>
    );
  }
}*/
