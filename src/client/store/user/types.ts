export const enum UserActionTypes {
    FETCH_REQUEST = '@@user/FETCH_REQUEST',
    FETCH_SUCCESS = '@@user/FETCH_SUCCESS',
    FETCH_ERROR = '@@user/FETCH_ERROR',
}

export interface User {
    username: string
}

export interface UserState {
    readonly username: string | null
    readonly loading: boolean
}
