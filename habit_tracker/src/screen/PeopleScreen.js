import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { signout } from "../action/AuthAction";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from '@react-navigation/native';

const LoginScreen = (props) => {
    const navigation = useNavigation()
    return <View>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>

        <TouchableOpacity onPress={() => {
            props.signout();
            // navigation.reset({ index: 0, routes: [{ name: 'Login' }] })

        }}>
            <Text>
                Logout
            </Text>
        </TouchableOpacity>
    </View>
}

export default connect(null, { signout })(LoginScreen);