import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import application from './application';
import auth from './auth';

const rootReducer = combineReducers({
  routing: routerReducer,
  application,
  auth
});

export default rootReducer;
