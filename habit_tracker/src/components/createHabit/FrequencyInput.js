import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native'
import TabBar from "../common/TabBar";
import DailyButtons from "./DaillyButtons";

const FrequencyInput = ({ preselectedValue, onUpdateFrequency }) => {

    const [value, setValue] = useState(preselectedValue)
    const tabBarOption = ['Daily', 'Weekly', 'Interval']

    const onSelectTab = (tab) => {
        setValue({ type: tab, duration: value.duration })
        const frequency = { type: tab, duration: value.duration }
        onUpdateFrequency(frequency)
    }
    const onUpdateDuration = (duration) => {
        setValue({ type: value.tab, duration: duration })
        const frequency = { type: value.type, duration: duration }
        onUpdateFrequency(frequency)
    }

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Frequency</Text>
            <View style={[styles.frequencyContainer, { minHeight: 100 }]}>
                <TabBar onSelectTab={onSelectTab} options={tabBarOption} preselectedOption={value.type} />
                <DailyButtons onUpdateDuration={onUpdateDuration} preselectedOption={value.duration} options={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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

    textInputStyle: {
        width: '100%',
        textAlign: 'center'
    },
})

export default FrequencyInput;