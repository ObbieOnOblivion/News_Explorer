import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './slices/slice.js';

// Create store
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;