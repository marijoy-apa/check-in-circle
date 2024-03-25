import 'react-native-gesture-handler';

import React, { useEffect } from "react";
import { View, Text } from 'react-native';
import LoginScreen from "./src/screen/LoginScreen";
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from "./src/store/store";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './src/screen/SignupScreen';
import HomeScreen from './src/screen/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { tryLocalSignin } from './src/action/AuthAction';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
    return <Provider store={store}>
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    </Provider>
}

const AuthNavigator = () => (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Signin" component={LoginScreen} />
        <AuthStack.Screen name="Signup" component={SignupScreen} />
    </AuthStack.Navigator>
)

const TabNavigator = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="MainScreen" component={HomeScreen} />
    </Tab.Navigator>
)

const MainNavigator = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(tryLocalSignin())
    }, [])
    const token = useSelector(state => state.auth.token)
    console.log('token in main navigator', token)
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {token ?
                (<Stack.Screen name="HomeScreen" component={TabNavigator} />)
                :
                (<Stack.Screen name="Login" component={AuthNavigator} />)}
        </Stack.Navigator>
    )
}
export default App;