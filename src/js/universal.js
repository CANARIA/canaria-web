import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import App from './components/app';
import Top from './components/templates/top/top';
import User from './components/templates/user/user';
import NotFound from './components/templates/notFound/notFound';

export const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Top} />
    <Route path="user" component={User} />
    <Route path="*" component={NotFound} />
  </Route>
);

export const configureStore = initialState => applyMiddleware(
  // middleware
)(createStore)(reducer, initialState);

export const withReduxProvider = (store, children) => (
  <Provider store={store}>
    {children}
  </Provider>
);