import { Action, TestState } from 'reducers/models'

let defaultState: TestState = {
  value: 0
}

export const INCREMENT_VALUE = 'INCREMENT_VALUE'
export const DECREMENT_VALUE = 'DECREMENT_VALUE'

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