import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RadioElement from './RadioElement';
import TabBarElement from './TabBarElement';

// TabBar component that displays a list of radio options
const TabBar = ({ onSelectTab, preselectedOption, options }) => {
    const [selectedOption, setSelectedOption] = useState(preselectedOption);

    const handleOptionPress = (option) => {
        setSelectedOption(option);
        onSelectTab(option);
    };

    return (
        <View style={styles.radioStyle}>
            {options.map((option) => (
                <TabBarElement
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
        marginVertical: 10,
        justifyContent: 'space-evenly',
        // borderColor: 'red', 
        // borderWidth: 1
    },
});

export default TabBar;
