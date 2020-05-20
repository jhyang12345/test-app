import { Provider } from 'react-redux'
import { createStore } from 'redux'

import React from 'react'
import './App.css'
import reducer from 'reducers'
import middleware from 'middleware'

import { INCREMENT_VALUE } from 'reducers/test'

import Counter from 'components/Counter'

const store = createStore(reducer, middleware)

function increment() {
  store.dispatch({
    type: INCREMENT_VALUE
  })
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
