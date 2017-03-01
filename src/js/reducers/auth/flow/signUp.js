import { handleActions } from 'redux-actions';
import * as Auth from '../../../actions/auth';

const initialState = {
  isFetching: false,
  error: ''
};

export default handleActions({
  [Auth.SIGN_UP_REQUEST]: state => Object.assign({}, state, {
    isFetching: true,
    error: ''
  }),

  [Auth.SIGN_UP_SUCCESS]: state => Object.assign({}, state, {
    isFetching: false
  }),

  [Auth.SIGN_UP_FAILURE]: (state, { payload }) => Object.assign({}, state, {
    isFetching: false,
    error: payload
  })
}, initialState);
