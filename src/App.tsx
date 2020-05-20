import { Provider } from 'react-redux'
import { createStore } from 'redux'

import React from 'react';
import logo from './logo.svg';
import './App.css';
import reducer from 'reducers'
import middleware from 'middleware'

const store = createStore(reducer, middleware)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          Wiped everything
        </header>
      </div>
    </Provider>
  )
}

export default App;
