import { configureStore, combineReducers } from '@reduxjs/toolkit'
import AuthReducer from '../reducer/AuthReducer'

export const store = configureStore({
  reducer: combineReducers({
    auth: AuthReducer,

  }),
})
