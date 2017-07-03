/* @flow */

import path from 'path'
import express from 'express'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import PrettyError from 'pretty-error'
import React from 'react'
import ReactDOM from 'react-dom/server'

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
    const route = await router.resolve({
      path: req.path,
      query: req.query
    })

    if (route.redirect) {
      res.redirect(route.status || 302, route.redirect)
      return
    }

    const data = Object.assign({}, route, {
      children: ReactDOM.renderToString(<App>{route.component}</App>)
    })

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />)
    res.status(route.status || 200)
    res.send(`<!doctype html>${html}`)
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

// import expressJwt, { UnauthorizedError as Jwt401Error } from 'express-jwt'
// import expressGraphQL from 'express-graphql'
// import jwt from 'jsonwebtoken'
// import fetch from 'node-fetch'

// import { ErrorPageWithoutStyle } from './routes/error/ErrorPage'
// import errorPageStyle from './routes/error/ErrorPage.css'
// import createFetch from './createFetch'
// import passport from './passport'
// import models from './data/models'
// import schema from './data/schema'
// import assets from './assets.json' // eslint-disable-line import/no-unresolved






// //
// // Authentication
// // -----------------------------------------------------------------------------
// app.use(expressJwt({
//   secret: config.auth.jwt.secret,
//   credentialsRequired: false,
//   getToken: req => req.cookies.id_token,
// }))
// // Error handler for express-jwt
// app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
//   if (err instanceof Jwt401Error) {
//     console.error('[express-jwt-error]', req.cookies.id_token)
//     // `clearCookie`, otherwise user can't use web-app until cookie expires
//     res.clearCookie('id_token')
//   }
//   next(err)
// })

// app.use(passport.initialize())

// if (__DEV__) {
//   app.enable('trust proxy')
// }
// app.get('/login/facebook',
//   passport.authenticate('facebook', { scope: ['email', 'user_location'], session: false }),
// )
// app.get('/login/facebook/return',
//   passport.authenticate('facebook', { failureRedirect: '/login', session: false }),
//   (req, res) => {
//     const expiresIn = 60 * 60 * 24 * 180 // 180 days
//     const token = jwt.sign(req.user, config.auth.jwt.secret, { expiresIn })
//     res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true })
//     res.redirect('/')
//   },
// )

// //
// // Register API middleware
// // -----------------------------------------------------------------------------
// app.use('/graphql', expressGraphQL(req => ({
//   schema,
//   graphiql: __DEV__,
//   rootValue: { request: req },
//   pretty: __DEV__,
// })))

// //
// // Hot Module Replacement
// // -----------------------------------------------------------------------------
// if (module.hot) {
//   app.hot = module.hot
//   module.hot.accept('./router')
// }
