import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import SignUp from './containers/pages/signUp';
import Register from './containers/pages/register';
import Login from './containers/pages/login';
import Top from './components/pages/top/top';
import NotFound from './components/pages/notFound/notFound';

const router = (
  <Route path="/" component={App}>
    <IndexRoute component={Top} />
    <Route path="signup" component={SignUp} />
    <Route path="register" component={Register} />
    <Route path="login" component={Login} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default router;
