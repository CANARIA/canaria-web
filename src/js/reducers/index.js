import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import poster from './poster';

const rootReducer = combineReducers({
  routing: routerReducer,
  auth,
  poster
});

export default rootReducer;
