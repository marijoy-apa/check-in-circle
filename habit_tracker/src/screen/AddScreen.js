import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { signout } from "../action/AuthAction";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FAB, BottomSheet } from 'react-native-elements'

const AddScreen = (props) => {
    const [bottomSheetVisible, setBottomSheetVisible] = useState(true)

    const insets = useSafeAreaInsets();

    const navigation = useNavigation()
    return <View>
       <BottomSheet isVisible={bottomSheetVisible}>
        <View style={{backgroundColor: 'red', height: 150, width: '100%'}}>
        <Text>HELLO WORLD</Text>

        </View>
       </BottomSheet>
    </View>
}

export default connect(null, { signout })(AddScreen);