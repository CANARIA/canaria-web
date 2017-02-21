import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import SignUpContainer from './containers/signUpContainer';
import RegisterContainer from './containers/registerContainer';
import LoginContainer from './containers/loginContainer';
import Top from './components/pages/top/top';
import User from './components/pages/user/user';
import NotFound from './components/pages/notFound/notFound';

const router = (
  <Route path="/" component={App}>
    <IndexRoute component={Top} />
    <Route path="signup" component={SignUpContainer} />
    <Route path="register" component={RegisterContainer} />
    <Route path="login" component={LoginContainer} />
    <Route path="user" component={User} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default router;
