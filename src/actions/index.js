export function setUserInfo({ identity, nickname, password }) {
  console.log(nickname)

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

