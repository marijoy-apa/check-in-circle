import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { signout } from "../action/AuthAction";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HabitItem from "../components/profileScreen/HabitItem";

const ProfileScreen = (props) => {
    const navigation = useNavigation()
    const insets = useSafeAreaInsets();
    return <View style={[styles.container, { paddingTop: insets.top }]}>


        <Text style={styles.greetingsText}>
            Hi Majoy,
        </Text>
        <Text style={styles.productiveText}>Let's be productive this March!</Text>

        <View style={styles.messageContainer}>
            <Text style={styles.make30Days}>
                Make 30 days streak!
            </Text>
            <View>

            </View>
        </View>

        <View style={styles.myHabitContainer}>
            <Text style={styles.addHabitText}>
                My Habit
            </Text>
            <View style={styles.addHabitContainer}>
                <TouchableOpacity>
                    <Text style={styles.addHabitText}>
                        + Add habit
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

        <HabitItem />


    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF6D3',
        height: '100%',
        padding: 30,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    messageContainer: {
        backgroundColor: '#FFC14D',
        height: 150,
        width: '100%',
        borderRadius: 20
    },
    greetingsText: {
        marginTop: 30,
        alignSelf: 'flex-start',
        fontSize: 20,
        fontWeight: '800'
    },
    productiveText: {
        marginTop: 5,
        fontSize: 14,
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    make30Days: {
        width: '50%',
        fontSize: 25,
        padding: 30,
        paddingHorizontal: 30,
        fontWeight: '800',
        textAlign: 'center',
        // alignSelf: 'c'
    },
    myHabitContainer: {
        marginVertical: 30,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 5,
        // borderColor: 'black'
    },
    addHabitContainer: {
        width: 120,
        backgroundColor: '#FFC14D',
        alignItems: 'center',
        height: 20,
        justifyContent: 'center',
        borderRadius: 8
    },
    addHabitText: {
        fontSize: 12,
        fontWeight: '700'
    }
})

export default connect(null, { signout })(ProfileScreen);