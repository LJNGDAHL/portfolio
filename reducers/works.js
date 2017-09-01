import {
  ADD_WORKS,
  TOGGLE_WORK,
  WORK_IN_OR_ABOVE_VIEW
} from '../actions';

/**
 * Handles the state used in Work Component.
 */
export default function (state = { items: [], open: [], inOrAboveView: [] }, action) {
  switch (action.type) {
  // Store all Works in state
  case ADD_WORKS: {
    return {
      ...state,
      items: state.items.concat(action.works)
    };
  }

  // Used when expanding Work description
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

  /**
   * Keeps track of which Work Components have been visible in viewport.
   */
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

