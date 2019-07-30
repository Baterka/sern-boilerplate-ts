import { Reducer } from 'redux'
import { UserState, UserActionTypes } from './types'

// Type-safe initialState!
const initialState: UserState = {
    username: null,
    loading: false
};

const reducer: Reducer<UserState> = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.FETCH_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case UserActionTypes.FETCH_SUCCESS: {
            return {
                ...state,
                loading: false,
                username: action.payload.username
            }
        }
        case UserActionTypes.FETCH_ERROR: {
            console.log(action);
            return {
                ...state,
                loading: false,
                username: action.payload
            }
        }
        default: {
            return state
        }
    }
};

export default reducer;
