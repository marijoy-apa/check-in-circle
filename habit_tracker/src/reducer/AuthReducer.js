import { ADD_ERROR, 
    CLEAR_ERROR_MESSAGE, 
    SIGN_IN, 
    SIGN_OUT } from "../action/types"

const INITIAL_STATE = {
    errorMessage: null,
    token: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ERROR:
            return { ...state, errorMessage: action.payload }
        case SIGN_IN:
            return { errorMessage: '', token: action.payload }
        case SIGN_OUT:
            return { errorMessage: '', token: null }

        case CLEAR_ERROR_MESSAGE:
            return { errorMessage: '' }
        default:
            return state
    }
}