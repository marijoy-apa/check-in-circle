// import createDataContext from "./createDataContext";
import habitApi from '../api/habit'
// import { AsyncStorage } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    ADD_ERROR,
    CLEAR_ERROR_MESSAGE,
    SIGN_IN,
    SIGN_OUT
} from './types';
// import { navigate } from "../navigationRef";

export const signup = ({ email, password }) => {
    console.log('signup', email, password)
    return async (dispatch) => {
        try {
            const response = await habitApi.post('/signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: SIGN_IN, payload: response.data.token });
            // navigate('TrackList')
            console.log(response)
        } catch (error) {
            console.log(error);
            dispatch({ type: ADD_ERROR, payload: 'Something went wrong with sign up' })
        }


    }
}

export const signin = ({ email, password }) => async (dispatch) => {
    try {
        const response = await habitApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: SIGN_IN, payload: response.data.token });
        // navigate('TrackList');
        console.log(response.data)
    } catch (error) {
        console.log('errow with signing in')
        console.log(error.response.data);
        dispatch({ type: ADD_ERROR, payload: 'Something went wrong with sign in' })
    }


}

export const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: SIGN_IN, payload: token });
        navigate('TrackList');
    }
    else {
        // navigate('Signup');
    }
}


export const signout = (dispatch) => async () => {
    console.log('signout')
    await AsyncStorage.removeItem('token');
    dispatch({ type: SIGN_OUT })
    // navigate('loginFlow')

}

export const clearErrorMessage = dispatch => () => {
    console.log('to clear error message')
    dispatch({ type: CLEAR_ERROR_MESSAGE })
}
