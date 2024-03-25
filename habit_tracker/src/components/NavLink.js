import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";



const NavLink = ({ text, routeName }) => {
    const navigation = useNavigation()
    return <View style={styles.linkContainer}>
        <Text style={styles.accountText}>{text}
        </Text>
        <TouchableOpacity onPress={() => {
            console.log(routeName)
            navigation.navigate( routeName )
        }}>
            <Text style={styles.linkText}>{routeName}</Text>
        </TouchableOpacity>
    </View>


}

const styles = StyleSheet.create({
   
    accountText: {
        marginTop: 12,
        fontWeight: '500',
        fontSize: 12
    },

    linkText: {
        marginTop: 12,
        fontWeight: '500',
        fontSize: 12,
        textDecorationLine: 'underline',
    },
    linkContainer: {
        flexDirection: 'row'
    },

})


export default NavLink;