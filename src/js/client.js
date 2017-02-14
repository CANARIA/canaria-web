import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { routes, configureStore, withReduxProvider } from './universal';

const initialState = window.__PRELOADED_STATE__ || {};
const store = configureStore(initialState);
const clientApp = withReduxProvider(store, <Router history={browserHistory}>{routes}</Router>);

render(
  clientApp,
  document.getElementById('root'),
);
