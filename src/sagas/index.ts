import { all, put, takeEvery, takeLatest } from 'redux-saga/effects'

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function* helloSaga() {
  console.log('Hello Sagas!')
  yield 'Nothing'
}

export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT_VALUE' })
}

export function* watchIncrementAsync() {
  yield takeLatest('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSage() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}