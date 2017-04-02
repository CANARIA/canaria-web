import path from 'path';
import Express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';

import React from 'react';
import cookie from 'react-cookie';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';

import getRoutes from './routes';
import configureStore from './store/configureStore';

const PORT = process.env.PORT || 3000;
const app = new Express();
const store = configureStore();

/* eslint-disable react/no-danger, react/prop-types */
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
/* eslint-disable react/no-danger, react/prop-types */

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
  match({ routes: getRoutes(store), location: req.url }, (err, redirect, renderProps) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }

    if (redirect) {
      res.redirect(302, redirect.pathname + redirect.search);
      return;
    }

    const preFetchComponents = renderProps.components.filter(component => component && component.preFetch);
    let fetchNum = 0;

    preFetchComponents.forEach(component => component.preFetch(renderProps, store.dispatch));

    if (preFetchComponents.length) {
      const unscribe = store.subscribe(() => {
        fetchNum += 1;

        if (fetchNum >= preFetchComponents.length) {
          unscribe();
          res.send(getTemplate(renderProps));
        }
      });
    } else {
      res.send(getTemplate(renderProps));
    }
  });
};

app.use(compression());
app.use(Express.static(path.join(__dirname, '../../dist')));
app.use(cookieParser());
app.use((req, res, next) => {
  cookie.plugToRequest(req, res);
  next();
});
app.use(handleRender);
app.listen(PORT, () => {
  global.console.log(`Express server listening on ${PORT}`);
});
