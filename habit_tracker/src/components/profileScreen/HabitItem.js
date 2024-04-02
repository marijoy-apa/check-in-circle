import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const HabitItem = (props) => {

    return <View style={styles.cardContainer}>
        <View style={styles.iconAndTextContainer}>
            <View style={styles.habitIcon}>

            </View>
            <View>
                <Text>Gym</Text>
                <Text>4 times a week</Text>
            </View>
        </View>

        <View style={styles.expandIcon}>
            <Icon name="triangle-right" size={25} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
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
    habitIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'purple',
        marginHorizontal: 10,
    },
    expandIcon: {
        marginRight: 10,

        // justifyContent: 'flex-end'
        // marginRight: 'auto',

        // alignSelf: 'flex-end'
    }, 
    iconAndTextContainer:{
        flexDirection: 'row', 
        flex: 1,
    }
})


export default HabitItem;