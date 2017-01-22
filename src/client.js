import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppComponent from './components/app';
import reducer from './reducers';

const preloadedState = window.__PRELOADED_STATE__ || {};
const store = createStore(reducer, preloadedState);

render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('root'),
);
