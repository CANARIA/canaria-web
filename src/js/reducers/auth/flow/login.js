import { handleActions } from 'redux-actions';
import * as Auth from '../../../actions/auth';

const initialState = {
  isFetching: false,
  error: ''
};

export default handleActions({
  [Auth.LOGIN_REQUEST]: state => Object.assign({}, state, {
    isFetching: true,
    error: ''
  }),

  [Auth.LOGIN_SUCCESS]: state => Object.assign({}, state, {
    isFetching: false
  }),

  [Auth.LOGIN_FAILURE]: (state, { payload }) => Object.assign({}, state, {
    isFetching: false,
    error: payload
  })
}, initialState);
