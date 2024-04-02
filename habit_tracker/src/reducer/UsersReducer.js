import { ADD_ERROR, 
    CLEAR_ERROR_MESSAGE, 
    SIGN_IN, 
    SIGN_OUT } from "../action/types"

const INITIAL_STATE = {
    allUsers: null,
    errorMessage: null,
}

export default (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        // case ADD_ERROR:
        //     console.log('adding error')
        //     return { ...state, errorMessage: action.payload }
        // case SIGN_IN:
        //     console.log('reducer for sign in', action.payload)
        //     return { errorMessage: '', token: action.payload }
        // case SIGN_OUT:
        //     return { errorMessage: '', token: null }

        // case CLEAR_ERROR_MESSAGE:
        //     return { errorMessage: '' }
        default:
            console.log('default action', action.type)
            return state
    }
}