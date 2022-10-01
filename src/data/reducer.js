import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addContact, addFilter, deleteContact } from './actions';
import { items } from './items';

const contactReducer = createReducer(items, {
  [addContact]: (state, action) => [action.payload, ...state],
  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filterReducer = createReducer('', {
  [addFilter]: (state, action) => action.payload,
});

export const reducers = combineReducers({
  items: contactReducer,
  filter: filterReducer,
});
