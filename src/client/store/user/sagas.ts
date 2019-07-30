import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { UserActionTypes } from './types'
import { fetchError, fetchSuccess } from './actions'
import { callApi } from '../../utils/api'

function* handleFetch() {
    try {
        const res = yield call(callApi, 'get', '/api/v1/user');

        // TODO: Error handler
        //if (res.status == "error") {
        //    yield put(fetchError("Error: " + res.message))
        //} else {
        //    yield put(fetchSuccess(res.data))
        //}
        yield put(fetchSuccess(res.data))
    } catch (err) {
        if (err instanceof Error) {
            yield put(fetchError(err.stack!))
        } else {
            yield put(fetchError('An unknown error occured.'))
        }
    }
}

function* watchFetchRequest() {
    yield takeEvery(UserActionTypes.FETCH_REQUEST, handleFetch)
}

function* heroesSaga() {
    yield all([fork(watchFetchRequest)])
}

export default heroesSaga;
