import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const middlewares = applyMiddleware(logger());

  return createStore(
    rootReducer,
    initialState,
    compose(middlewares)
  );
}
