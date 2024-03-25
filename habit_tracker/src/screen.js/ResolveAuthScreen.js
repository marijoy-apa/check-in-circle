import React, { useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import { tryLocalSignin } from "../action/AuthAction";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from '@react-navigation/native';

const ResolveAuthScreen = (props) => {
    const navigation = useNavigation();

    useEffect(() => {
        props.tryLocalSignin();
    }, []);

    // useEffect(() => {
    //     console.log('i am executed')
    //     if (props.token) {
    //         // navigation.dispatch(
    //         //     StackActions.replace('HomeScreen')
    //         // )
    //         navigation.reset({ index: 0, routes: [{ name: 'HomeScreen' }] })
    //     } else {
    //         navigation.navigate('Login')
    //     }
    // }, [props.token, navigation])

    return null;

};

const mapStateToProps = (state) => {
    console.log(state.auth.token)
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps, { tryLocalSignin })(ResolveAuthScreen);