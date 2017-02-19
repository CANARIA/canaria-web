import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';
import configureStore from './store/configureStore';

const initialState = window.__PRELOADED_STATE__ || {};
const store = configureStore(initialState);
const clientApp = (
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>
);

render(
  clientApp,
  document.getElementById('root')
);
