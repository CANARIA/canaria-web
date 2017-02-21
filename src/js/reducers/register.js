import { handleActions } from 'redux-actions';
import * as Auth from '../actions/auth';

const initialState = {
  tokenChecked: false,
  tokenError: '',
  isFetching: false,
  registerError: ''
};

export default handleActions({
  [Auth.RGISTER_TOKEN_VALID]: state => Object.assign({}, state, {
    tokenChecked: true
  }),

  [Auth.RGISTER_TOKEN_INVALID]: (state, { payload }) => Object.assign({}, state, {
    tokenChecked: true,
    tokenError: payload
  }),

  [Auth.RGISTER_REQUEST]: state => Object.assign({}, state, {
    isFetching: true,
    registerError: ''
  }),

  [Auth.RGISTER_SUCCESS]: state => Object.assign({}, state, {
    isFetching: false
  }),

  [Auth.RGISTER_FAILURE]: (state, { payload }) => Object.assign({}, state, {
    isFetching: false,
    registerError: payload
  })
}, initialState);
