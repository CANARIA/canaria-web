import { handleActions } from 'redux-actions';
import { FETCH_POSTERS } from '../actions/poster';

import assign from '../helpers/assign';

const initialState = {
  list: []
};

export default handleActions({
  [FETCH_POSTERS]: (state, { payload }) => assign(state, { list: payload })
}, initialState);
