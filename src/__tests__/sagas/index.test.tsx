import { helloSaga } from 'sagas'

test('helloSaga', () => {
  const gen = helloSaga()
  expect(gen.next().value).toEqual('Nothing')
})