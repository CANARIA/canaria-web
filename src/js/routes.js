import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import SignUp from './containers/pages/signUp';
import Register from './containers/pages/register';
import Login from './containers/pages/login';
import Top from './components/pages/top/top';
import NotFound from './components/pages/notFound/notFound';

const isAuthenticated = (store) => {
  const { auth } = store.getState();
  return auth.account.authenticated;
};

export default function getRoutes(store) {
  const guestOnly = (nextState, replace, done) => {
    if (isAuthenticated(store)) {
      replace('/');
    }
    done();
  };

  const routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Top} />

      <Route onEnter={guestOnly}>
        <Route path="signup" component={SignUp} />
        <Route path="register" component={Register} />
        <Route path="login" component={Login} />
      </Route>

      <Route path="*" component={NotFound} />
    </Route>
  );

  return routes;
}
