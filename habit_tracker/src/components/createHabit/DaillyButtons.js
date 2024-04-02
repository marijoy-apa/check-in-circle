import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

// TabBar component that displays a list of radio options
const DailyButtons = ({ onUpdateDuration, preselectedOption, options }) => {
    const [selectedOption, setSelectedOption] = useState(preselectedOption);

    const handleOptionPress = (option) => {
        if (selectedOption.includes(option)) {
            setSelectedOption(selectedOption.filter(item => item !== option))
            onUpdateDuration(selectedOption.filter(item => item !== option))
        } else {
            setSelectedOption([...selectedOption, option])
            onUpdateDuration([...selectedOption, option])

        }
    };

    const isIncluded = (value) => {
        console.log(selectedOption, value)
        return selectedOption.includes(value)
    }

    const DayOption = ({ value, onSelect, selectedOption }) => {
        return (
            <TouchableOpacity onPress={() => {
                handleOptionPress(value)
            }}>
                <View style={isIncluded(value) ? styles.selectedContainer : styles.container}>
                    <Text>{value[0]}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.radioStyle}>
            {options.map((option) => (
                <DayOption
                    key={option}
                    value={option}
                    onSelect={handleOptionPress}
                    selectedOption={selectedOption}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    radioStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        justifyContent: 'space-evenly',
        // borderColor: 'red', 
        // borderWidth: 1
    },
    selectedContainer: {
        width: 25,
        height: 25,
        borderRadius: 12.5,
        backgroundColor: '#FFC14D',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        width: 25,
        height: 25,
        borderRadius: 12.5,
        backgroundColor: 'darkgrey',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default DailyButtons;
