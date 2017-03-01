import { handleActions } from 'redux-actions';
import { INITIALIZE_APP } from '../actions/application';

const initialState = {
  isInitialized: false
};

export default handleActions({
  [INITIALIZE_APP]: state => Object.assign({}, state, {
    isInitialized: true
  })
}, initialState);
