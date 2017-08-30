import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { hasJS, githubData, heroIsLoaded } from './responses';
import works from './works';

const rootReducer = combineReducers({
  hasJS,
  githubData,
  heroIsLoaded,
  works,
  routing
});

export default rootReducer;
