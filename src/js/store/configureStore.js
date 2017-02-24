import { createStore, compose, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const logger = createLogger();
  let middlewares = null;

  if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
    middlewares = applyMiddleware(
      logger
    );
  } else {
    middlewares = applyMiddleware();
  }

  return createStore(
    rootReducer,
    initialState,
    compose(middlewares)
  );
}
