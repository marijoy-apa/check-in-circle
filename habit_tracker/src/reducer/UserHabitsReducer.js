import {
    ADD_ERROR,
    ADD_HABIT,
    CLEAR_ERROR_MESSAGE,
    FETCH_HABITS,
    SIGN_IN,
    SIGN_OUT,
    START_FETCHING_HABITS,
    UPDATE_HABIT_FORM
} from "../action/types"

const INITIAL_STATE = {
    allHabits: [],
    error: null,
    isFetching: '',
}

export default (state = INITIAL_STATE, action) => {
    console.log('All user habits action', action)
    switch (action.type) {
        case FETCH_HABITS:
            console.log('add habit')
            return { allHabits: action.payload, isFetching: false }
        case START_FETCHING_HABITS:
            return { ...state, isFetching: true }
        default:
            console.log('default action', action.type)
            return state
    }
}