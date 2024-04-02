import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { signout } from "../action/AuthAction";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createHabit, updateHabitForm } from "../action/CreateHabitAction";
import TabBar from "../components/common/TabBar";
import DailyButtons from "../components/createHabit/DaillyButtons";
import { CheckBox } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import NameInput from "../components/createHabit/NameInput";
import FrequencyInput from "../components/createHabit/FrequencyInput";
import GoalInput from "../components/createHabit/GoalInput";
import ReminderInput from "../components/createHabit/ReminderInput";

const CreateHabit = (props) => {
    const navigation = useNavigation()
    // console.log(props.goals.achieveItAll)
    const onUpdateName = (value) => {
        props.updateHabitForm({ props: 'name', value })
    }
    const onUpdateFrequency = (value) => {
        props.updateHabitForm({ props: 'frequency', value })
    }
    const onUpdateCheckbox = (value) => {
        props.updateHabitForm({ props: 'goal', value: { achieveItAll: !props.goal.achieveItAll } })
    }
    const onUpdateReminder = (value) => {
        props.updateHabitForm({ props: 'reminder', value })
    }
    const onSaveForm = () => {
        props.createHabit(navigation)
    }

    return <View style={styles.page}>
        <NameInput
            value={props.name}
            onUpdateName={onUpdateName} />

        <FrequencyInput
            preselectedValue={props.frequency}
            onUpdateFrequency={onUpdateFrequency} />

        <GoalInput
            value={props.goal.achieveItAll}
            onUpdateCheckbox={onUpdateCheckbox} />


        <ReminderInput value={props.reminder} onUpdateReminder={onUpdateReminder} />
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Accountability Partner</Text>
            <View style={[styles.addContainer]}>
                <Text> + Add</Text>
            </View>
        </View>

        <TouchableOpacity onPress={onSaveForm}>
            <View style={styles.saveContainer}>
                <Text>
                    Save
                </Text>
            </View>
        </TouchableOpacity>


    </View>
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFF6D3',
        flex: 1,
        alignItems: 'center',
        padding: 50,
    },
    textInputContainer: {
        marginTop: 7,
        // width: 300,
        height: 45,
        borderRadius: 7,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#333333',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 2,
            height: 2
        },

    },
    frequencyContainer: {
        marginTop: 7,
        maxHeight: 180,
        // width: 300,
        // height: 45,
        // borderRadius: 7,
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        // alignItems: 'flex-start',
        shadowColor: '#333333',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 2,
            height: 2
        },

    },

    goalContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        shadowColor: '#333333',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 2,
            height: 2
        },

    },
    textInputStyle: {
        width: '100%',
        textAlign: 'center'
    },
    inputLabel: {
        alignSelf: 'flex-start',
        marginTop: 20,
        fontWeight: '700',
        color: '#65594E'
    },
    inputContainer: {
        justifyContent: 'flex-start',
        width: '100%'
    },
    addContainer: {
        backgroundColor: '#DCB976',
        alignSelf: 'flex-start',
        width: 80,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        marginTop: 10,
        borderRadius: 10,
        // width: '100%'
    },
    saveContainer: {
        width: '75%',
        height: 50,
        backgroundColor: '#DCB976',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        borderRadius: 20,
    },
    reminderTimeContainer: {
        height: 30,
        width: 70,
        borderRadius: 15,
        backgroundColor: 'darkgrey',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapStateToProps = (state) => {
    console.log('state', state);
    const { name, frequency, goal, reminder, partner, formError } = state.addHabitForm;
    console.log('goal', goal.achieveItAll)
    return { name, frequency, goal, reminder, partner, formError };
}

export default connect(mapStateToProps, { signout, createHabit, updateHabitForm })(CreateHabit);