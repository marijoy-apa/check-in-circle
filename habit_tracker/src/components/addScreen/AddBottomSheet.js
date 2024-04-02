import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FAB, BottomSheet } from 'react-native-elements'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
const AddBottomSheet = (props) => {
    const insets = useSafeAreaInsets();

    const navigation = useNavigation()
    return <View>
        <BottomSheet isVisible={props.isVisible}>
            <View style={styles.bottomSheet}>
                <TouchableOpacity onPress={props.onClose} style={styles.closeButton}>
                    <AntDesign name="closecircle" size={20} color="#525132" />
                </TouchableOpacity>
                <Text>One check at a time!</Text>
                <View style={styles.createContainer}>
                    <TouchableOpacity>
                        <FontAwesome name="medal" size={50} style={styles.iconStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('CreateHabit')
                        props.onClose();
                    }}>
                        <AntDesign name="checksquare" size={50} style={styles.iconStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="create" size={50} style={styles.iconStyle} />
                    </TouchableOpacity>

                </View>
            </View>
        </BottomSheet>
    </View>
}

const styles = StyleSheet.create({
    bottomSheet: {
        backgroundColor: '#FFC14D',
        height: 250,
        width: '100%',
        borderRadius: 20,
        padding: 20,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    createContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        width: '60%',
        justifyContent: 'space-evenly'
    },
    closeButton: {
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    iconStyle: {
        backgroundColor: '#525132',
        borderColor: 'red',
        height: 70,
        width: 70,
        borderRadius: 10,
        // borderRadius: 100,
        padding: 10,
        color: '#FFC14D',
        overflow: 'hidden'

    }
})

export default connect(null, {})(AddBottomSheet);