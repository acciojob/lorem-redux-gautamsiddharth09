// src/app/store.js
import { configureStore } from '@reduxjs/toolkit'
import loremReducer from '../features/loremSlice' // fixed typo

export const store = configureStore({
  reducer: {
     lorem: loremReducer, // fixed typo
  },
})

export default store // optional but allows default import
