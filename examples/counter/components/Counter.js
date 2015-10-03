import React, { Component, PropTypes } from 'react';
import { increment, incrementIfOdd, incrementAsync, decrement } from '../actions/counter';

class Counter extends Component {
  render() {
    const { dispatch, counter } = this.props;
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={() => dispatch(increment())}>+</button>
        {' '}
        <button onClick={() => dispatch(decrement())}>-</button>
        {' '}
        <button onClick={() => dispatch(incrementIfOdd())}>Increment if odd</button>
        {' '}
        <button onClick={() => dispatch(incrementAsync())}>Increment async</button>
      </p>
    );
  }
}

Counter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default Counter;
