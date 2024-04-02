import habitApi from '../api/habit'
import { CLEAR_HABIT_FORM, FETCH_HABITS, START_FETCHING_HABITS, UPDATE_HABIT_FORM } from './types';

export const createHabit = (navigation) => {
    console.log('createHabit')

    return async (dispatch, getState) => {
        console.log('getState', getState().addHabitForm)

        const {
            name,
            frequency,
            goal,
            reminder,
            partner
        } = getState().addHabitForm
        try {
            const response = await habitApi.post('/habits', {
                name,
                frequency,
                goal,
                reminder,
                partner,
            });
            dispatch({type: CLEAR_HABIT_FORM})

            dispatch(fetchHabit())
            navigation.goBack()
            console.log(response)
        } catch (error) {
            console.warn(

                'Unable to create habit'
            )
            console.log(error);
        }
    }
}

export const updateHabitForm = ({ props, value }) => {
    console.log('createHabit')
    return { type: UPDATE_HABIT_FORM, payload: { props, value } }

};


export const fetchHabit = () => {
    return async (dispatch, getState) => {
        // console.log('getState', getState().addHabitForm)

        // const {
        //     name,
        //     frequency,
        //     goal,
        //     reminder,
        //     partner
        // } = getState().addHabitForm
        dispatch({type: START_FETCHING_HABITS, payload: true})
        console.log('fetch habit')
        try {
            const response = await habitApi.get('/habits');
            // navigation.goBack();
            dispatch({type: FETCH_HABITS, payload: response.data})
            console.log(response.data)
        } catch (error) {
            console.warn(

                'Unable to fetch habit'
            )
            console.log(error);
        }
    }
}