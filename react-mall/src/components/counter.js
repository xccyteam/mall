import React from 'react'
import {increment, decrement} from '../redux/actions'
import {connect} from 'react-redux'

const btnStyle = {
  margin: '10px'
}

function Counter({value, onIncrement, onDecrement}) {
  return (
    <div>
      <button style={btnStyle} onClick={onIncrement}>+</button>
      <button style={btnStyle} onClick={onDecrement}>-</button>
      <span>times：{value}</span>
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    value: state.counter
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onIncrement() {
      dispatch(increment())
    },
    onDecrement() {
      dispatch(decrement())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)