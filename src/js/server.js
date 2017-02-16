import path from 'path';
import Express from 'express';
import compression from 'compression';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';

import { routes, configureStore, withReduxProvider } from './universal';
import htmlTemplate from './index.html';

const PORT = process.env.PORT || 3000;
const app = new Express();

function handleRender(req, res) {
  match({ routes, location: req.url }, (err, redirect, renderProps) => {
    if (err) {
      return res.status(500).send(err.message);
    }

    if (redirect) {
      return res.redirect(302, redirect.pathname + redirect.search);
    }

    if (!renderProps) {
      return res.status(404).send('Not found');
    }

    const store = configureStore();
    const fetchingParams = {
      params: renderProps.params,
      dispatch: store.dispatch,
    };
    const promises = renderProps.components.map((component) => {
      if (component.fetchData) {
        return component.fetchData(fetchingParams);
      }
      return Promise.resolve('no fetching');
    });

    return Promise.all(promises)
    .then(() => {
      const serverApp = withReduxProvider(store, <RouterContext {...renderProps} />);
      const html = renderToString(serverApp);
      const initialState = store.getState();

      res.send(htmlTemplate(html, initialState));
    });
  });
}

app.use(compression());
app.use(Express.static(path.join(__dirname, '../../dist')));
app.use(handleRender);
app.listen(PORT, () => {
  global.console.log(`Express server listening on ${PORT}`);
});
