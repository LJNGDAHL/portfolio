import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { githubData } from './responses';

const rootReducer = combineReducers({
  githubData,
  routing
});

export default rootReducer;
