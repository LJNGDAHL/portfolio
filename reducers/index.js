import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import githubData from './responses';
import works from './works';

const rootReducer = combineReducers({
  githubData,
  works,
  routing
});

export default rootReducer;
