import path from 'path'
import express from 'express'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import PrettyError from 'pretty-error'
import React from 'react'
import ReactDOM from 'react-dom/server'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'
import { ServerStyleSheet } from 'styled-components'

import configureStore from './store/configureStore'
import config from './config'
import router from './router'
import App from './components/App'
import Html from './components/Html'

const app = express()

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(compression())
app.use(express.static(path.resolve(__dirname, '../../public')))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async (req, res, next) => {
  try {
    const history = createMemoryHistory({ initialEntries: [req.path] })
    const store = configureStore({}, history)
    const route = await router.resolve({
      path: req.path,
      query: req.query
    })

    if (route.redirect) {
      res.redirect(route.status || 302, route.redirect)
      return
    }

    const sheet = new ServerStyleSheet()
    const Component = sheet.collectStyles(route.component)
    const data = Object.assign({}, route, {
      children: ReactDOM.renderToString(
        <Provider store={store}>
          <App router={router} history={history}>
            {Component}
          </App>
        </Provider>
      ),
      initialState: store.getState()
    })

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />)
    const styleTags = sheet.getStyleTags()

    res.status(route.status || 200)
    res.send(`<!doctype html>${html.replace(/<\/body>/, `</bod>${styleTags}`)}`)
  } catch (err) {
    next(err)
  }
})

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError()
pe.skipNodeFiles()
pe.skipPackage('express')

app.use((err, req, res) => {
  console.error(`access: ${req.url}`)
  console.error(pe.render(err))
  // const html = ReactDOM.renderToStaticMarkup(
  //   <Html
  //     title="Internal Server Error"
  //     description={err.message}
  //     styles={[{ id: 'css', cssText: errorPageStyle._getCss() }]} // eslint-disable-line no-underscore-dangle
  //   >
  //     {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err} />)}
  //   </Html>,
  // )
  res.status(err.status || 500)
  res.send(`<!doctype html><body>エラー</body></html>`)
  // res.send(`<!doctype html>${html}`)
})

//
// Launch the server
// -----------------------------------------------------------------------------
app.listen(config.port, () => {
  console.info(`The server is running at http://localhost:${config.port}/`)
})

export default app

// //
// // Hot Module Replacement
// // -----------------------------------------------------------------------------
// if (module.hot) {
//   app.hot = module.hot
//   module.hot.accept('./router')
// }
