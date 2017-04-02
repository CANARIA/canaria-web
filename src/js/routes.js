import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { PATH } from './constants/application';

import App from './containers/app';
import Home from './components/pages/home/home';
import Feed from './containers/pages/feed/feed';
import Ranking from './containers/pages/ranking/ranking';
import Auth from './containers/pages/auth/auth';
import SignUp from './containers/pages/signUp/signUp';
import Register from './containers/pages/register/register';
import Login from './containers/pages/login/login';

const isAuthenticated = (store) => {
  const { auth } = store.getState();
  return auth.authenticated;
};

export default function getRoutes(store) {
  const userOnly = (nextState, replace, done) => {
    if (!isAuthenticated(store)) replace(`/${PATH.LOGIN}`);
    done();
  };

  const guestOnly = (nextState, replace, done) => {
    if (isAuthenticated(store)) replace(`/${PATH.FEED}`);
    done();
  };

  const routes = (
    <Route path="/" component={App}>
      <Route component={Home}>
        <IndexRoute component={Feed} onEnter={userOnly} />
        <Route path={PATH.RANKING} component={Ranking} />
      </Route>

      <Route component={Auth} onEnter={guestOnly}>
        <Route path={PATH.SIGNUP} component={SignUp} />
        <Route path={PATH.REGISTER} component={Register} />
        <Route path={PATH.LOGIN} component={Login} />
      </Route>
    </Route>
  );

  return routes;
}
