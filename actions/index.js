export function testAction(test) {
  return {
    type: 'FOO',
    test
  };
}

export const ADD_GITHUB_DATA = 'ADD_GITHUB_DATA';
export const addGithubData = (data) => {
  return {
    type: ADD_GITHUB_DATA,
    data
  };
};
