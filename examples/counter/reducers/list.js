import { ADD_TO_LIST, REMOVE_FROM_LIST, PERFORM_IN_LIST } from '../actions/list';

export default function list(reducer) {
  return function (state = [], action) {
    const {
      index,
      action: innerAction
    } = action;

    switch (action.type) {
    case ADD_TO_LIST:
      return [
        ...state,
        reducer(undefined, action)
      ];
    case REMOVE_FROM_LIST:
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    case PERFORM_IN_LIST:
      return [
        ...state.slice(0, index),
        reducer(state[index], innerAction),
        ...state.slice(index + 1)
      ];
    default:
      return state;
    }
  }
}