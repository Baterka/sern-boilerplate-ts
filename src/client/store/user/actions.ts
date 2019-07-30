import { action } from 'typesafe-actions'
import { UserActionTypes, User } from './types'

export const fetchRequest = () => action(UserActionTypes.FETCH_REQUEST);

export const fetchSuccess = (data: User[]) => action(UserActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) => action(UserActionTypes.FETCH_ERROR, message);
