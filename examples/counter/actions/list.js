export const ADD_COUNTER = 'ADD_COUNTER';
export const REMOVE_COUNTER = 'REMOVE_COUNTER';

export function add() {
  return {
    type: ADD_COUNTER
  };
}

export function remove() {
  return {
    type: REMOVE_COUNTER
  };
}