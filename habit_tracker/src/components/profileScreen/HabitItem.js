import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const HabitItem = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const generateDurationText = () => {
        const duration = item.frequency.duration;
        if (!duration) {
            return
        }
        console.log('durationmm', duration)
        if (duration.length === 0) {
            return 'No days selected'
        }
        else if (duration.length === 1) {
            return `Every ${duration[0]}`;
        } else if (duration.length === 2) {
            return `Every ${duration.join(' and ')}`;
        } else {
            const allDaysExceptLast = duration.slice(0, -1).join(', ');
            const lastDay = duration[duration.length - 1];
            return `Every ${allDaysExceptLast}, and ${lastDay}`;
        }
    }

    return <View style={styles.cardContainer}>
        <View style={styles.iconAndTextContainer}>
            <View style={styles.habitIcon}>

            </View>
            <View>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.durationText}>{generateDurationText()}</Text>
            </View>
        </View>

        <TouchableOpacity>
            <View style={styles.expandIcon}>
                <Icon name="triangle-right" size={25} />
            </View>
        </TouchableOpacity>

    </View>
}

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 5,
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
    },
    iconAndTextContainer: {
        flexDirection: 'row',
        flex: 1,
    },
    itemName: {
        marginTop: 3,
        fontSize: 16,
        fontWeight: '800'
    },
    durationText: {
        marginTop: 3,
        fontSize: 11
    }
})


export default HabitItem;