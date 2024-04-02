import 'react-native-gesture-handler';

import React, { useEffect, useState } from "react";
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
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import PeopleScreen from './src/screen/PeopleScreen';
import AddScreen from './src/screen/AddScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import ProgressScreen from './src/screen/ProgressScreen';
import { BottomSheet } from 'react-native-elements';
import AddBottomSheet from './src/components/addScreen/AddBottomSheet';
import CreateHabit from './src/screen/CreateHabit';
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

const TabNavigator = () => {

    const [bottomSheetVisible, setBottomSheetVisible] = useState(false)

    return (
        <>
            <Tab.Navigator screenOptions={{ headerShown: false, tabBarLabel: '', tabBarStyle: { paddingTop: 15, height: 90, backgroundColor: '#FFC14D' } }}>
                <Tab.Screen name="MainScreen" component={HomeScreen} options={{ tabBarIcon: ({ color }) => (<Icon size={30} name="home" color={color} />) }} />
                <Tab.Screen name="PeopleScreen" component={PeopleScreen} options={{ tabBarIcon: ({ color }) => (<Ionicons size={35} name="people" color={color} />) }} />
                <Tab.Screen name="AddScreen" listeners={({ navigation, route }) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        setBottomSheetVisible(true)
                    }
                })} component={AddScreen} options={{ tabBarIcon: ({ color }) => (<AntDesign size={30} name="pluscircle" color={color} />) }} />
                <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{ tabBarIcon: ({ color }) => (<Ionicons size={30} name="person" color={color} />) }} />
                <Tab.Screen name="ProgressScreen" component={ProgressScreen} options={{ tabBarIcon: ({ color }) => (<Icon size={30} name="bar-graph" color={color} />) }} />
            </Tab.Navigator>
            <AddBottomSheet isVisible={bottomSheetVisible} onClose={() => { setBottomSheetVisible(false) }} />
        </>

    )
}

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
            <AuthStack.Screen name="CreateHabit" component={CreateHabit} options={{headerShown: true, headerTitle:"Create Habit", headerLeftLabelVisible: false}}/>

        </Stack.Navigator>
    )
}

// const CreateNavigator = () => (
//     <AuthStack.Navigator screenOptions={{ headerShown: false }} >
//         <AuthStack.Screen name="CreateHabit" component={CreateHabit} />
//         <AuthStack.Screen name="Signup" component={SignupScreen} />
//     </AuthStack.Navigator>
// )
export default App;