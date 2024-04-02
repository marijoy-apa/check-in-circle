import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { signout } from "../action/AuthAction";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = (props) => {
    const insets = useSafeAreaInsets();

    const navigation = useNavigation()
    return <View style={[styles.container, { paddingTop: insets.top }]}>

        <View style={styles.column1}>
            <View style={[styles.cardContainer, { height: 80 }]}></View>
            <View style={[styles.cardContainer, { height: 130 }]}></View>
            <View style={[styles.cardContainer, { height: 140 }]}></View>
            <View style={[styles.cardContainer, { height: 50 }]}></View>
            <View style={[styles.cardContainer, { height: 120 }]}></View>
            <View style={[styles.cardContainer, { height: 120 }]}></View>
            <View style={[styles.cardContainer, { height: 40 }]}></View>


        </View>
        <View style={styles.column1}>
        <View style={[styles.cardContainer, { height: 140 }]}></View>
            <View style={[styles.cardContainer, { height: 130 }]}></View>
            <View style={[styles.cardContainer, { height: 140 }]}></View>
            <View style={[styles.cardContainer, { height: 90 }]}></View>
            <View style={[styles.cardContainer, { height: 120 }]}></View>
            <View style={[styles.cardContainer, { height: 120 }]}></View>
            <View style={[styles.cardContainer, { height: 40 }]}></View>

        </View>

    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF6D3',
        height: '100%',
        padding: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center'
    },
    cardContainer: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: 60,
        borderRadius: 7,
        shadowColor: '#333333',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 2,
            height: 2
        },
    },
    column1: {
        width: 190,
    }
})

export default connect(null, { signout })(HomeScreen);