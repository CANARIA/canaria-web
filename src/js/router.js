import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import SignUp from './container/signUp';
import Login from './container/login';
import Top from './components/ui/templates/top/top';
import User from './components/ui/templates/user/user';
import NotFound from './components/ui/templates/notFound/notFound';

const router = (
  <Route path="/" component={App}>
    <IndexRoute component={Top} />
    <Route path="signup" component={SignUp} />
    <Route path="login" component={Login} />
    <Route path="user" component={User} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default router;
