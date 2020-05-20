import { helloSaga } from 'sagas'

test('helloSaga', () => {
  expect(helloSaga()).toEqual('Nothing')
})