import { ADD_GITHUB_DATA, HAS_JS } from '../actions';

export const hasJS = (state = false, action) => {
  switch (action.type) {
  case HAS_JS: {
    return action.hasJS;
  }
  default:
    return state;
  }
};

export const githubData = (state = {}, action) => {
  switch (action.type) {
  case ADD_GITHUB_DATA: {
    return {
      ...state,
      data: action.data
    };
  }
  default:
    return state;
  }
};
