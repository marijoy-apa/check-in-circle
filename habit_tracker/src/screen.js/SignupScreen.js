import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { signin, signup } from "../action/AuthAction";
import { useNavigation } from "@react-navigation/native";
const SignupScreen = (props) => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const onSignup = () => {
        console.log(email, password)
        props.signup({ email, password })
    }
    return <View>

        <View style={styles.pageContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <View style={styles.textInputContainer}>
                <TextInput placeholder="Email"
                    value={email}
                    autoCapitalize="none"
                    onChangeText={(value) => { setEmail(value) }} />
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


            <TouchableOpacity onPress={onSignup}>
                <View style={styles.buttonContainer}>
                    <Text>
                        Signup
                    </Text>
                </View>
            </TouchableOpacity>


            <Text style={styles.accountText}>Already have an account?
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('Login')
                }}>
                    <Text>Sign in</Text>

                </TouchableOpacity>
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


export default connect(null, { signup, signin })(SignupScreen);