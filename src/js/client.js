/* @flow */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore, { history } from './store/configureStore'
import router from './router'
import Route from './containers/Route'

startApp()
async function startApp() {
  const initialState = {}
  const store = configureStore(initialState)
  const route = await router.resolve({
    path: location.pathname
  })

  render(
    <Provider store={store}>
      <Route route={route} history={history} />
    </Provider>,
    document.getElementById('app')
  )
}
