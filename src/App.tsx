import { Provider } from 'react-redux'
import { createStore } from 'redux'

import React from 'react'

import { applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import './App.css'
import reducer from 'reducers'
import rootSaga from 'sagas'

import { TestActionTypes } from 'reducers/test'

import Counter from 'components/Counter'

const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(
  logger,
  sagaMiddleware
)

const store = createStore(reducer, middleware)

sagaMiddleware.run(rootSaga)

function increment() {
  store.dispatch({
    type: TestActionTypes.INCREMENT_ASYNC,
  });
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header" onClick={increment}>
          Wiped everything
          <Counter />
        </header>
      </div>
    </Provider>
  );
}

export default App;
