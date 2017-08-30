import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
/* eslint-enable */

const initStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
};

export default initStore;
