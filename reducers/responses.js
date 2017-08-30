import { HAS_JS, ADD_GITHUB_DATA, HERO_IMG_LOADED } from '../actions';

/**
 * Update state when javascript is enabled
 */
export const hasJS = (state = false, action) => {
  switch (action.type) {
  case HAS_JS: {
    return action.hasJS;
  }
  default:
    return state;
  }
};

/**
 * Update state when hero image is fully loaded.
 */
export const heroIsLoaded = (state = false, action) => {
  switch (action.type) {
  case HERO_IMG_LOADED: {
    return action.loaded;
  }
  default:
    return state;
  }
};

/**
 * Add data fetched from Github (used in Statusbar Component)
 */
export const githubData = (state = {}, action) => {
  switch (action.type) {
  case ADD_GITHUB_DATA: {
    return action.data;
  }
  default:
    return state;
  }
};
