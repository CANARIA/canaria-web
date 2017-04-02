import { handleActions } from 'redux-actions';
import { GET_POSTERS } from '../actions/poster';

import assign from '../helpers/assign';

const initialState = {
  list: []
};

export default handleActions({
  [GET_POSTERS]: (state, { payload }) => assign(state, { list: payload })
}, initialState);
