import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

import DateTimePickerModal from "react-native-modal-datetime-picker";

const ReminderInput = ({ value, onUpdateReminder }) => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const dateTime = new Date(date);
        const hours = dateTime.getUTCHours();
        const minutes = dateTime.getUTCMinutes();
        const localHours = (hours - new Date().getTimezoneOffset() / 60) % 24; // Convert to local hours
        console.log(`Time: ${localHours}:${minutes}`);
        const time = `${localHours}:${minutes}`
        onUpdateReminder([...value, time])
        hideDatePicker();
    };

    const onDeleteTime = (index) => {
        const newValue = [...value]
        newValue.splice(index, 1)
        console.log('newvalue', newValue)
        // const updatedValue = [...newValue.slice(0, index), ...newValue.slice(index + 1)]; // Create a new array without the item at the specified index
        // console.log(updatedValue)
        onUpdateReminder(newValue)

    }
    const renderReminder = () => {
        return (
            <ScrollView horizontal >
                <View style={styles.parentContainer}>
                    {value.map((time, index) => (
                        <View style={styles.reminderTimeContainer}
                            key={index}>
                            <Text>{time}</Text>
                            <TouchableOpacity onPress={() => { onDeleteTime(time) }}>
                                <AntDesign name="closecircle" size={12} color="#525132" />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>

        )
    }
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Reminder</Text>
            {renderReminder()}
            <TouchableOpacity onPress={showDatePicker}>
                <View style={[styles.addContainer]}>
                    <Text> + Add</Text>
                </View>
            </TouchableOpacity>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    parentContainer: {
        maxHeight: 80,
        flexWrap: true
        // padding: 30,

    },
    inputContainer: {
        justifyContent: 'flex-start',
        width: '100%'
    },
    inputLabel: {
        alignSelf: 'flex-start',
        marginTop: 20,
        fontWeight: '700',
        color: '#65594E'
    },

    reminderTimeContainer: {
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 30,
        width: 90,
        borderRadius: 15,
        backgroundColor: 'darkgrey',
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 5,

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
})

export default ReminderInput;