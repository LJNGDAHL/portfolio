import { ADD_GITHUB_DATA } from '../actions';

export default function (state = {}, action) {
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
