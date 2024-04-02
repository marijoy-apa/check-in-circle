import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native'

const NameInput = ({value, onUpdateName}) => {

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Name</Text>
            <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.textInputStyle}
                    value={value}
                    autoCapitalize="none"
                    onChangeText={onUpdateName} />
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
    textInputStyle: {
        width: '100%',
        textAlign: 'center'
    },
})

export default NameInput;