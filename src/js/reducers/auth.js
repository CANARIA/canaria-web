import { combineReducers } from 'redux';
import account from './auth/account';
import flow from './auth/flow';

const rootReducer = combineReducers({
  account,
  flow
});

export default rootReducer;
