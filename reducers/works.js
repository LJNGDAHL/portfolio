import { ADD_WORKS, TOGGLE_WORK, WORK_IN_OR_ABOVE_VIEW } from '../actions';

export default function (state = { items: [], open: [], inOrAboveView: [] }, action) {
  switch (action.type) {
  case ADD_WORKS: {
    return {
      ...state,
      items: state.items.concat(action.works)
    };
  }

  case TOGGLE_WORK: {
    const open = state.open.slice();
    const index = state.open.indexOf(action.id);

    if (index === -1) {
      open.push(action.id);
    } else {
      open.splice(index, 1);
    }

    return {
      ...state,
      open
    };
  }

  // TODO: Refactor since it's almost the same as above
  case WORK_IN_OR_ABOVE_VIEW: {
    const inOrAboveView = state.inOrAboveView.slice();
    const index = state.inOrAboveView.indexOf(action.id);

    if (index === -1) {
      inOrAboveView.push(action.id);
    }

    return {
      ...state,
      inOrAboveView
    };
  }

  default:
    return state;
  }
}

