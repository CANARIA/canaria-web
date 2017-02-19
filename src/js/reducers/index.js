import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import signUp from './signUp';

const rootReducer = combineReducers({
  routing: routerReducer,
  signUp
});

export default rootReducer;
