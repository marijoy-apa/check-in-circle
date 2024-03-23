import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";


const LoginScreen = () => {
    const [userName, setUserNam] = useState('');
    const [password, setPassword] = useState('')
    const onLogin = () => {
        console.log(userName, password)
    }
    return <View>

        <View style={styles.pageContainer}>
            <Text style={styles.inputLabel}>Username</Text>
            <View style={styles.textInputContainer}>
                <TextInput placeholder="Username"
                    value={userName}
                    autoCapitalize="none"
                    onChangeText={(value) => { setUserNam(value) }} />
            </View>

            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.textInputContainer}>
                <TextInput placeholder="Password"
                    value={password}
                    autoCapitalize="none"
                    onChangeText={(value) => {
                        setPassword(value)
                    }}
                />
            </View>

            <Text style={styles.forgotPasswordText}>
                Forgot password?
            </Text>
            <TouchableOpacity onPress={onLogin}>
                <View style={styles.buttonContainer}>
                    <Text>
                        Login
                    </Text>
                </View>
            </TouchableOpacity>


            <Text style={styles.accountText}>Don't have an account?
                {/* <TouchableOpacity> */}
                <Text>Sign up</Text>

                {/* </TouchableOpacity> */}
            </Text>
        </View>

    </View>
}

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderRadius: 10,
        height: '100%',
        backgroundColor: '#FFF6D3',
        padding: 55,

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
    accountText: {
        marginTop: 12,
        fontWeight: '500',
        fontSize: 12
    },
    forgotPasswordText: {
        marginTop: 5,
        fontSize: 10,
        alignSelf: 'flex-end'
    }
})


export default LoginScreen;