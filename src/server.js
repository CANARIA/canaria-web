import path from 'path';
import Express from 'express';
import compression from 'compression';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import config from '../config';
import htmlTemplate from './index.html';
import reducer from './reducers';
import App from './components/App';

const app = new Express();
const port = config.port;

function handleRender(req, res) {
  const store = createStore(reducer);
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const preloadedState = store.getState();

  res.send(htmlTemplate(html, preloadedState));
}

app.use(compression());
app.use(Express.static(path.join(__dirname, '..', 'dist')));
app.use(handleRender);
app.listen(port);
