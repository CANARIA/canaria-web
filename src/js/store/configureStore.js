/* @flow */

import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { createLogger } from 'redux-logger'
import historyMiddleware from '../middlewares/history'
import rootReducer from '../reducers'

export const history = createBrowserHistory()

export default function configureStore(initialState) {
  const middlewares = applyMiddleware(
    createLogger(),
    historyMiddleware(history)
  )

  return createStore(
    rootReducer,
    initialState,
    compose(middlewares)
  )
}
