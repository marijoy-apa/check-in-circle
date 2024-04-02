import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { signin, signup } from "../action/AuthAction";
import { useNavigation } from "@react-navigation/native";
import Logo from "../components/Logo";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
// import Icon from 'react-native-vector-icons/AntDesign';


const LoginScreen = (props) => {
    const navigation = useNavigation();
    const onLogin = ({ email, password }) => {
        console.log(email, password)
        props.signin({ email, password })
        // navigation.reset({ index: 0, routes: [{ name: 'HomeScreen' }] })

    }
    return (
        <View
            style={styles.pageContainer}>
            {/* <Icon name="stepforward" size={30} color="#900" /> */}
            <Logo />
            <AuthForm
                onSubmit={onLogin}
                submitButtonText="Login"
                errorMessage={props.error}
            />
            <NavLink
                routeName='Signup'
                text="Don't have and account? " />
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


export default connect(mapStateToProps, { signup, signin })(LoginScreen);