export default function list(reducer, actionTypes) {
  return function (state = [], action) {
    switch (action.type) {
    case actionTypes.add:
      return [...state, reducer(undefined, action)];
    case actionTypes.remove:
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
    default:
      const { index, ...rest } = action;
      if (typeof index !== 'undefined') {
        return state.map((item, i) => {
          if(index == i) {
            return reducer(item, rest)
          } else {
            return item
          }
        });
      }
      return state;
    }
  }
}