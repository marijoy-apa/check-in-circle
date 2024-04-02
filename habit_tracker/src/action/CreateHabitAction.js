import habitApi from '../api/habit'
import { UPDATE_HABIT_FORM } from './types';


export const createHabit = ({ name, frequency, goal, reminder, partner }) => {
    console.log('createHabit')
    return async (dispatch) => {
        try {
            habitApi.post('/habits', { name: 'Hello', frequency: { type: 'Daily', duration: '2' }, goal: { achieveItAll: false }, reminder: '23:10', partner: ['65fbdf34057270be05c0a108'] });
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }
}

export const updateHabitForm = ({ props, value }) => {
    console.log('createHabit')
    return {type: UPDATE_HABIT_FORM, payload: {props, value}}

}