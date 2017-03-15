import { handleActions } from 'redux-actions';
import * as Auth from '../../actions/auth';

const initialState = {
  authenticated: false,
  access_token: '',
  jwt: '',
  user: {}
};

export default handleActions({
  [Auth.LOGIN_SUCCESS]: (state, { payload }) => Object.assign({}, state, {
    authenticated: true,
    access_token: payload.access_token,
    jwt: payload.jwt,
    user: payload.user
  })
}, initialState);
