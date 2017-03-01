import path from 'path';
import Express from 'express';
import compression from 'compression';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';

import getRoutes from './routes';
import configureStore from './store/configureStore';

const PORT = process.env.PORT || 3000;
const app = new Express();
const store = configureStore();

/* eslint-disable react/no-danger */
const HTML = ({ content, initialState }) => {
  const head = Helmet.rewind();
  const attrs = head.htmlAttributes.toComponent();

  return (
    <html lang="ja" {...attrs}>
      <head>
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.title.toComponent()}
        {head.style.toComponent()}
        <link rel="icon" type="image/vnd.microsoft.icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple_icon.png" />
        <link rel="stylesheet" href="/bundle.css" />
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
        <script id="initial-state" type="text/plain" data-json={JSON.stringify(initialState)} />
        <script src="/bundle.js" />
      </body>
    </html>
  );
};
/* eslint-disable react/no-danger */

const getTemplate = (renderProps) => {
  const serverApp = renderToString(
    <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>
  );
  const initialState = store.getState();

  return `<!doctype html>\n${renderToString(<HTML content={serverApp} initialState={initialState} />)}`;
};

const handleRender = (req, res) => {
  let preFetchFlag = false;

  match({ routes: getRoutes(store), location: req.url }, (err, redirect, renderProps) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }

    if (redirect) {
      res.redirect(302, redirect.pathname + redirect.search);
      return;
    }

    renderProps.components
    .filter(component => component && component.fetchData)
    .forEach((component) => {
      preFetchFlag = true;
      component.fetchData(renderProps, store.dispatch);
    });

    if (preFetchFlag) {
      const unscribe = store.subscribe(() => {
        if (store.getState().application.isInitialized || !preFetchFlag) {
          res.send(getTemplate(renderProps));
          unscribe();
        }
      });
    } else {
      res.send(getTemplate(renderProps));
    }
  });
};

app.use(compression());
app.use(Express.static(path.join(__dirname, '../../dist')));
app.use(handleRender);
app.listen(PORT, () => {
  global.console.log(`Express server listening on ${PORT}`);
});
