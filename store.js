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

// TODO: FIGURE OUT WHAT TO DO WITH THIS!
// const initStore = (initialState = {}, isServer) => {
//   if (isServer && typeof window === 'undefined') {
//     return createStore(
//       rootReducer,
//       initialState,
//       composeEnhancers(applyMiddleware(thunk))
//     );
//   }
//   let store = window.localStorage.getItem('store');

//   if (!store) {
//     store = createStore(
//       rootReducer,
//       initialState,
//       composeEnhancers(applyMiddleware(thunk))
//     );
//   } else {
//     store = JSON.parse(store);
//   }

//   return store;
// };


export default initStore;
