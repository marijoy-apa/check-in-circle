import React from "react";
import { View, Text, StyleSheet } from 'react-native'

import { CheckBox } from "react-native-elements";

const GoalInput = ({ value, onUpdateCheckbox }) => {

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Goal</Text>
            <View style={[styles.goalContainer]}>
                <Text>Achieve it all</Text>
                <CheckBox checked={value} checkedColor="orange" onPress={onUpdateCheckbox} />
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
})

export default GoalInput;