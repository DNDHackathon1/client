const initialState = {
  user: {
    id : 0,
    identity : '',
    nickname: '',
    password : '',
    profileImageUrl : '',
    goalTime : 0,
  },
  party : {
    contents: "",
    endTime: "",
    goalTime: 0,
    startTime: "",
    title: "",
    userId: 0
  },
  partyGroup : [
    {
      contents: "운동 하실분!",
      endTime: "20",
      goalTime: 0,
      startTime: "19",
      title: "달리기",
      userId: 6
    },
    {
      contents:'소리는 숫자 세는 소리와 비명소리만!',
      endTime: "14",
      goalTime: 0,
      startTime: "13",
      title: '쇠질 1시간!',
      userId: 7
    }
  ],
};

const reducers = {
  setUserInfo(state, { payload: { identity, nickname, password, id = 0 } }) {
    return {
      ...state,
      user : {
         ...state.user,
        identity,
        nickname,
        password,
        id
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
  setPartys(state, { payload : { party }}) {
    return {
      ...state,
      partyGroup : [
        ...state.partyGroup,
        party,
      ]
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
  setParty(state, { payload : { party }}) {
    const { contents,
            endTime,
            goalTime,
            startTime,
            title,
            userId
          } = party;
    return {
      ...state,
      party : {
        ...state.party,
        contents,
        startTime,
        endTime,
        goalTime,
        title,
        id : Date.now(),
        userId,
      }
    }
  }
};

function defaultReducer(state) {
  return state;
}

export default function LoginReducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}