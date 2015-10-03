import { combineReducers } from 'redux';
import counter from './counter';
import list from './list'

const counterList = list(counter);

const rootReducer = combineReducers({
  counterList
});

export default rootReducer;
