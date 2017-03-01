import { combineReducers } from 'redux';
import signUp from './flow/signUp';
import register from './flow/register';
import login from './flow/login';

const rootReducer = combineReducers({
  signUp,
  register,
  login
});

export default rootReducer;
