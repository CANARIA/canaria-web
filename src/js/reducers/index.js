/* @flow */

import { combineReducers } from 'redux'
import historyReducer from './history'

const rootReducer = combineReducers({
  router: historyReducer
})

export default rootReducer
