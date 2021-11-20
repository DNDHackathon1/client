export function setUserInfo({ identity, nickname, password }) {
  return {
    type: 'setUserInfo',
    payload: { identity, nickname, password },
  };
}

export function setProfile({ profileImageUrl }) {
  return {
    type: 'setProfile',
    payload: { profileImageUrl },
  };
}

export function setGoalTime({ goalTime }) {
  return {
    type: 'setGoalTime',
    payload: { goalTime },
  };
}

export function setParty({ party }) {
  return {
    type: 'setParty',
    payload: { party },
  };
}

export function setPartys({ party }) {
  return {
    type : 'setPartys',
    payload : { party }
  }
}

