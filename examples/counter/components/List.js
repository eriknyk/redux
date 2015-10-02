import React, { Component, PropTypes } from 'react';
import Counter from './Counter';

class List extends Component {

  increment(index) {
    let action = this.props.counterActions.increment()
    action.index = index
    this.props.dispatch(action)
  }

  decrement(index) {
    let action = this.props.counterActions.decrement()
    action.index = index
    this.props.dispatch(action)
  }

  render() {
    const { add, remove, counterList, counterActions } = this.props;
    return (
      <p>
        {' '}
        <button onClick={add}>Add counter</button>
        {' '}
        <button onClick={remove}>Remove counter</button>
        {counterList.map((counter, counterId) => {
          return <Counter key={counterId} id={counterId} counter={counter} increment={this.increment.bind(this, counterId)} decrement={this.decrement.bind(this, counterId)}></Counter>
        })}
      </p>
    );
  }
}

List.propTypes = {
  add: PropTypes.func.isRequired, 
  remove: PropTypes.func.isRequired,
  counterList: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default List;
