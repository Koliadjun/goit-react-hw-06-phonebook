import { combineReducers } from 'redux';
import actions from './phonebook-type';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case actions.ADD:
      return [...state, payload];

    case actions.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};
const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actions.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};
export default combineReducers({ items, filter });
