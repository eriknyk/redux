import { combineReducers } from 'redux';
import counter from './counter';
import list from './list'

const rootReducer = combineReducers({
  counterList: list(counter, {
    add: 'ADD_COUNTER',
    remove: 'REMOVE_COUNTER'
  })
});

export default rootReducer;
