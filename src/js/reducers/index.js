import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import signUp from './signUp';
import register from './register';
import login from './login';

const rootReducer = combineReducers({
  routing: routerReducer,
  signUp,
  register,
  login
});

export default rootReducer;
