import { configureStore, combineReducers } from '@reduxjs/toolkit'
import AuthReducer from '../reducer/AuthReducer'
import CreateHabitReducer from '../reducer/CreateHabitReducer'

export const store = configureStore({
  reducer: combineReducers({
    auth: AuthReducer,
    addHabitForm: CreateHabitReducer

  }),
})
