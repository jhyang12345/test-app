import { Action, TestState } from 'reducers/models'

let defaultState: TestState = {
  value: 0
}

export const TestActionTypes = {
  INCREMENT_VALUE: 'INCREMENT_VALUE',
  INCREMENT_ASYNC: 'INCREMENT_ASYNC',
  DECREMENT_VALUE: 'DECREMENT_VALUE'
}

export default function test(state=defaultState, action: Action) {
  switch (action.type) {
    case TestActionTypes.INCREMENT_VALUE: {
      return {
        ...state,
        value: state.value + 1
      }
    }
    case TestActionTypes.DECREMENT_VALUE: {
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