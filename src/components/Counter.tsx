import React from 'react'
import { TestState } from 'reducers/models'
import { connect } from 'react-redux'

interface CounterProps {
  value: number
}

class Counter extends React.Component<CounterProps> {

  render() {
    const { value } = this.props

    return (
      <div>
        {value}
      </div>
    )
  }
}

// IMPORTANT
// destructuring + type definition
// https://medium.com/@rileyhilliard/es6-destructuring-in-typescript-4c048a8e9e15
const mapStateToProps = ({ test }: { test: TestState }) => {
  const { value } = test
  return {
    value
  }
}

export default connect(mapStateToProps)(Counter)