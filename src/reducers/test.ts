import { Action } from 'reducers/models'

let defaultState = {
  value: 0
}

const INCREMENT_VALUE = 'INCREMENT_VALUE'
const DECREMENT_VALUE = 'DECREMENT_VALUE'

export default function test(state=defaultState, action: Action) {
  switch (action.type) {
    case INCREMENT_VALUE: {
      return {
        ...state,
        value: state.value + 1
      }
    }
    case DECREMENT_VALUE: {
      return {
        ...state,
        value: state.value - 1
      }
    }
    default: {
      return state
    }
  }
}