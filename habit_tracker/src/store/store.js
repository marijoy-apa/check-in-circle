import { configureStore, combineReducers } from '@reduxjs/toolkit'
import AuthReducer from '../reducer/AuthReducer'
import CreateHabitReducer from '../reducer/CreateHabitReducer'
import UsersReducer from '../reducer/UsersReducer'
import UserHabitsReducer from '../reducer/UserHabitsReducer'

export const store = configureStore({
  reducer: combineReducers({
    auth: AuthReducer,
    addHabitForm: CreateHabitReducer,
    allUsers: UsersReducer,
    userHabits: UserHabitsReducer,

  }),
})
