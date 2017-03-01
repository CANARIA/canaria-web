import { handleActions } from 'redux-actions';
import * as Auth from '../../actions/auth';

const initialState = {
  authenticated: false,
  user: {}
};

export default handleActions({
  [Auth.LOGIN_SUCCESS]: (state, { payload }) => Object.assign({}, state, {
    authenticated: true,
    user: payload
  })
}, initialState);
