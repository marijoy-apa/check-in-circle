import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";


const AuthForm = ({ submitButtonText, onSubmit, errorMessage }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const onClickSubmit = () => {
        onSubmit({ email, password })
    }
    return <View style={styles.pageContainer}>
        {/* <View > */}
        <Text style={styles.inputLabel}>Email</Text>
        <View style={styles.textInputContainer}>
            <TextInput placeholder="Email"
                style={styles.textInputStyle}

                value={email}
                autoCapitalize="none"
                onChangeText={(value) => { setEmail(value) }} />
        </View>

        <Text style={styles.inputLabel}>Password</Text>
        <View style={styles.textInputContainer}>
            <TextInput
                style={styles.textInputStyle}
                placeholder="Password"
                value={password}
                autoCapitalize="none"
                onChangeText={(value) => {
                    setPassword(value)
                }}
            />
        </View>

        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

        <TouchableOpacity onPress={onClickSubmit}>
            <View style={styles.buttonContainer}>
                <Text>
                    {submitButtonText}
                </Text>
            </View>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorMessage: {
        marginTop: 25,
        marginLeft: 15,
        fontSize: 12,
        color: "red",
    },

    textInputContainer: {
        marginTop: 7,
        width: 275,
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
    inputLabel: {
        alignSelf: 'flex-start',
        marginTop: 20,
        fontWeight: '700',
        color: '#65594E'
    },
    buttonContainer: {
        marginTop: 40,
        borderRadius: 10,
        backgroundColor: '#FFC14D',
        height: 45,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // accountText: {
    //     marginTop: 12,
    //     fontWeight: '500',
    //     fontSize: 12
    // },
    // forgotPasswordText: {
    //     marginTop: 5,
    //     fontSize: 10,
    //     alignSelf: 'flex-end'
    // },
    // linkText: {
    //     marginTop: 12,
    //     fontWeight: '500',
    //     fontSize: 12,
    //     textDecorationLine: 'underline',
    // },
    // linkContainer: {
    //     flexDirection: 'row'
    // },

})


export default AuthForm;