const initialState = {
  username: '',
  repos: [],
  orgs: []
}

const SET_USERNAME = 'SET_USERNAME';
const SET_REPOS = 'SET_REPOS';
const SET_ORGS = 'SET_ORGS';

export function setUsername(username) {
  return {
      type: SET_USERNAME,
      payload: username
  };
}

export function setRepos(repos) {
  return {
      type: SET_REPOS,
      payload: repos
  };
}

export function setOrgs(orgs) {
  return {
      type: SET_ORGS,
      payload: orgs
  };
}


export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
      case SET_USERNAME:
          return {...state, username: payload};
      case SET_REPOS:
          return {...state, repos: payload};
      case SET_ORGS:
          return {...state, orgs: payload};
      default: return state;
  }
}