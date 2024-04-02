import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { signin, signup } from "../action/AuthAction";
import { useNavigation } from "@react-navigation/native";
import Logo from "../components/Logo";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";


const SignupScreen = (props) => {

    const onSignup = ({ email, password }) => {
        console.log(email, password)
        props.signup({ email, password })
    }
    return (
        <View
            style={styles.pageContainer}>
            <Logo />
            <AuthForm
                onSubmit={onSignup}
                submitButtonText="Sign up" 
                errorMessage={props.error}
                />
            <NavLink
                routeName='Signin'
                text="Already have an account " />
        </View>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#FFF6D3',
    },
})

const mapStateToProps = (state) => {
    console.log(state)
    return { error: state.auth.errorMessage }
}


export default connect(mapStateToProps, { signup, signin })(SignupScreen);