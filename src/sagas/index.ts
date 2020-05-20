import { call, put } from 'redux-saga/effects'

export function* helloSaga() {
  console.log('Hello Sagas!')
  yield 'Nothing'
}