export const HAS_JS = 'HAS_JS';
export function hasJS(haz) {
  return {
    type: HAS_JS,
    hasJS: haz
  };
}

export const ADD_GITHUB_DATA = 'ADD_GITHUB_DATA';
export function addGithubData(data) {
  return {
    type: ADD_GITHUB_DATA,
    data
  };
}

export const ADD_WORKS = 'ADD_WORKS';
export function addWorks(works) {
  return {
    type: ADD_WORKS,
    works
  };
}


export const TOGGLE_WORK = 'TOGGLE_WORK';
export function toggleWork(work) {
  return {
    type: TOGGLE_WORK,
    id: work
  };
}

export const WORK_IN_OR_ABOVE_VIEW = 'WORK_IN_OR_ABOVE_VIEW';
export function workInView(work) {
  return {
    type: WORK_IN_OR_ABOVE_VIEW,
    id: work
  };
}
