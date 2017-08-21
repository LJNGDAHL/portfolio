import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { githubData } from './responses';

// For testing purposes only
const foo = (state = {}, action) => {
  switch (action.type) {
  case 'FOO':
    console.log('FOO is in reducer!');
    return {
      ...state,
      test: action.test
    };

  default:
    return state;
  }
};

const rootReducer = combineReducers({
  foo,
  githubData,
  routing
});

export default rootReducer;
