import { handleActions } from 'redux-actions';

import * as Auth from '../actions/auth';
import assign from '../helpers/assign';

const initialState = {
  tokenChecked: false,
  tokenError: '',
  authenticated: false,
  access_token: '',
  jwt: '',
  user: {},
  isFetching: false,
  error: ''
};

export default handleActions({
  [Auth.AUTH_INITIALIZE]: () => initialState,

  [Auth.AUTH_REQUEST]: state => assign(state, {
    isFetching: true,
    error: ''
  }),

  [Auth.AUTH_SUCCESS]: state => assign(state, { isFetching: false }),

  [Auth.AUTH_FAILURE]: (state, { payload }) => assign(state, {
    isFetching: false,
    error: payload
  }),

  [Auth.RGISTER_TOKEN_VALID]: state => assign(state, { tokenChecked: true }),

  [Auth.RGISTER_TOKEN_INVALID]: (state, { payload }) => assign(state, {
    tokenChecked: true,
    tokenError: payload
  }),

  [Auth.LOGIN_SUCCESS]: (state, { payload }) => assign(state, {
    authenticated: true,
    access_token: payload.access_token,
    jwt: payload.jwt,
    user: payload.user
  })
}, initialState);
