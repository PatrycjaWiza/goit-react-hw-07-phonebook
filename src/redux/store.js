import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducer';

const reducer = {
  contacts: reducers,
};

export const store = configureStore({
  reducer,
});
