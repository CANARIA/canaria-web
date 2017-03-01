import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import getRoutes from './routes';
import configureStore from './store/configureStore';

const initialState = JSON.parse(document.getElementById('initial-state').getAttribute('data-json'));
const store = configureStore(initialState);
const clientApp = (
  <Provider store={store}>
    <Router history={browserHistory}>{getRoutes(store)}</Router>
  </Provider>
);

render(
  clientApp,
  document.getElementById('root')
);
