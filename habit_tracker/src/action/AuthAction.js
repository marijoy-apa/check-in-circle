import habitApi from '../api/habit'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    ADD_ERROR,
    CLEAR_ERROR_MESSAGE,
    SIGN_IN,
    SIGN_OUT
} from './types';

export const signup = ({ email, password }) => {
    console.log('signup', email, password)
    return async (dispatch) => {
        try {
            if (!email || !password) {
                dispatch({ type: ADD_ERROR, payload: 'Email and password should be populated' })
                return;
            }
            const response = await habitApi.post('/signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: SIGN_IN, payload: response.data.token });
            console.log(response)
        } catch (error) {
            console.log(error);
            dispatch({ type: ADD_ERROR, payload: 'Email or password is invalid' })
        }


    }
}

export const signin = ({ email, password }) => async (dispatch) => {
    try {
        if (!email || !password) {
            dispatch({ type: ADD_ERROR, payload: 'Email and password should be populated' })
            return;
        }
        const response = await habitApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: SIGN_IN, payload: response.data.token });
        console.log(response.data)
    } catch (error) {
        console.log('errow with signing in')
        console.log(error.response.data);
        dispatch({ type: ADD_ERROR, payload: 'Invalid email or password' })
    }


}

export const tryLocalSignin = () => async (dispatch) => {
    console.log('try local sign in')
    const token = await AsyncStorage.getItem('token');
    console.log('token is given', token)
    if (token) {
        console.log('dispatch token')
        dispatch({ type: SIGN_IN, payload: token });
    }
    else {
        // navigate('Signup');
    }
}


export const signout = () => async (dispatch) => {
    console.log('signout')
    await AsyncStorage.removeItem('token');
    dispatch({ type: SIGN_OUT })
    // navigate('loginFlow')

}

export const clearErrorMessage = dispatch => () => {
    console.log('to clear error message')
    dispatch({ type: CLEAR_ERROR_MESSAGE })
}
