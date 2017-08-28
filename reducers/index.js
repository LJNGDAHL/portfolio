import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { githubData, hasJS } from './responses';
import works from './works';

const rootReducer = combineReducers({
  hasJS,
  githubData,
  works,
  routing
});

export default rootReducer;
