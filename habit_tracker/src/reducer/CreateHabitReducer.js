import {
    ADD_ERROR,
    ADD_HABIT,
    CLEAR_ERROR_MESSAGE,
    CLEAR_HABIT_FORM,
    FETCH_HABITS,
    SIGN_IN,
    SIGN_OUT,
    UPDATE_HABIT_FORM
} from "../action/types"

const INITIAL_STATE = {
    name: null,
    frequency: {
        type: 'Daily',
        duration: ["Sunday"],
    },
    goal: {
        achieveItAll: 'false'
    },
    reminder: [],
    partner: [],
    formError: null
}

export default (state = INITIAL_STATE, action) => {
    console.log('Create Habit action', action)
    switch (action.type) {
        case UPDATE_HABIT_FORM:
            console.log('add habit')
            return { ...state, [action.payload.props]: action.payload.value }
        case ADD_HABIT:
            console.log('add habit')
            return { ...state };
        case CLEAR_HABIT_FORM:
            return INITIAL_STATE
        default:
            console.log('default action', action.type)
            return state
    }
}