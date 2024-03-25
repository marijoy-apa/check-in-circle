import 'react-native-gesture-handler';

import React from "react";
import { View, Text } from 'react-native';
import LoginScreen from "./src/screen.js/LoginScreen";
import { Provider } from 'react-redux';
import { store } from "./src/store/store";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './src/screen.js/SignupScreen';
import ResolveAuthScreen from './src/screen.js/ResolveAuthScreen';
import HomeScreen from './src/screen.js/HomeScreen';
const Stack = createStackNavigator();

const App = () => {
    return <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ResolveAuth" component={ResolveAuthScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>

}

export default App;