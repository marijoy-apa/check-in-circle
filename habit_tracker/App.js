import React from "react";
import { View, Text } from 'react-native';
import LoginScreen from "./src/screen.js/LoginScreen";
import { Provider } from 'react-redux';

const App = () => {
    return <Provider store={store}>

        <View>
            <LoginScreen />

        </View>
    </Provider>

}

export default App;