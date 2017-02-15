import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import router from './router';
import reducer from './reducers';

export const routes = router;

export const configureStore = initialState => applyMiddleware(
  // middleware
)(createStore)(reducer, initialState);

export const withReduxProvider = (store, children) => (
  <Provider store={store}>
    {children}
  </Provider>
);
