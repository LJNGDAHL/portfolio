import { ADD_GITHUB_DATA } from '../actions';

/* eslint-disable */
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
