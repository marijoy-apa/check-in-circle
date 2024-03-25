import 'react-native-gesture-handler';

import React from "react";
import { View, Text } from 'react-native';
import LoginScreen from "./src/screen.js/LoginScreen";
import { Provider } from 'react-redux';
import { store } from "./src/store/store";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () => {
    return <Provider store={store}>
        {/* <View>
            <LoginScreen />
        </View> */}
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    </Provider>

}

export default App;