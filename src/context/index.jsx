import { createContext } from 'react'

const initialState = {
  user: {
    goalTime: 0,
    identity: '',
    nickname: '',
    password: '',
    profileImageUrl: '',
  },
}

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        ...state,
        user: {
          ...action.user,
        },
      }
    default:
      return state
  }
}

const UserDispatch = createContext(null)

export { initialState, reducer, UserDispatch }
