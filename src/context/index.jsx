import { createContext } from 'react';

const initialState = {
    user: {
        id : 0,
        nickname : '',
        profileImage : '',
    }
};

function reducer(state, action) {
    console.log(state, action);
    switch (action.type) {
      case 'CREATE_USER':
        return {
            ...state, 
            user: { 
                ...action.user 
            }
        };
      default:
        return state;
    }
};

const UserDispatch = createContext(null);

export { initialState, reducer, UserDispatch };