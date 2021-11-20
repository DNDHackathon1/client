const initialState = {
  user: {
    identity : '',
    nickname: '',
    password : '',
    profileImageUrl : '',
    goalTime : 0,
  },
};

const reducers = {
  setUserInfo(state, { payload: { identity, nickname, password } }) {
    return {
      ...state,
      user : {
         ...state.user,
        identity,
        nickname,
        password
      },
    };
  },
  
  setProfile(state, { payload: { profileImageUrl } }) {
    return {
      ...state,
      user : {
        ...state.user,
        profileImageUrl
      },
    };
  },
  setGoalTime(state, { payload: { goalTime } }) {
    return {
      ...state,
      user : {
        ...state.user,
        goalTime
      },
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function LoginReducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}