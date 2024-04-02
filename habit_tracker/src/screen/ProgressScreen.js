import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { signout } from "../action/AuthAction";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FAB, BottomSheet } from 'react-native-elements'

const ProfileScreen = (props) => {
    const [bottomSheetVisible, setBottomSheetVisible] = useState(true)

    const insets = useSafeAreaInsets();

    const navigation = useNavigation()
    return <View style={{ paddingTop: insets.top, flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <TouchableOpacity onPress={props.signout}>
            <View style={styles.buttonContainer}>
                <Text>
                    Logout
                </Text>
            </View>
        </TouchableOpacity>

    </View>
}

const styles= StyleSheet.create({
    buttonContainer:{
        height: 40, 
        width: 90, 
        backgroundColor: 'pink', 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    }
})

export default connect(null, { signout })(ProfileScreen);