import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

/* 
'store' is what Provider references before reactDOM renders the App component 
a store can have multiple slices, which use reducers to alter state
look at features/counter for guidance 
*/

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
