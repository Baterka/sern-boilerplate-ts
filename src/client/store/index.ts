import { combineReducers, Dispatch, Action, AnyAction } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { connectRouter, RouterState } from 'connected-react-router'

import userSagas from './user/sagas'
import userReducer from './user/reducer'
import { UserState } from './user/types'
import { History } from 'history'

export interface ApplicationState {
    user: UserState
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>
}

export const createRootReducer = (history: History) =>
    combineReducers({
        user: userReducer,
        router: connectRouter(history)
    });

export function* rootSaga() {
    yield all([
        fork(userSagas)
    ])
}
