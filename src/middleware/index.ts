import { applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware()

export default applyMiddleware(
  logger,
  sagaMiddleware
)