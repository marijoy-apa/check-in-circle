import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons'
import Spacer from './Spacer';
import Icon from 'react-native-vector-icons/Fontisto';

// TabBarElement component representing a single radio option
const TabBarElement = ({ value, onSelect, selectedOption }) => {

    // handler function to notify parent component of the selected option
    const handleOptionPress = (option) => {
        onSelect(option)
    };

    // Function to render the radio icon based on the selected state
    const renderRadioIcon = (option) => {
        return (
            <View style={selectedOption===option ? styles.selectedContainer : styles.container}>
                <Text style={selectedOption===option ? styles.selectedText : styles.text}>{value}</Text>


            </View>
            // <Icon
            //     name={selectedOption === option ? 'radio-btn-active' : 'radio-btn-passive'}
            //     size={20}
            //     style={styles.icon}
            // />
        );
    };

    return (
        <TouchableOpacity testID={`radio-element-${value}`}
            style={styles.optionContainer}
            onPress={() => handleOptionPress(value)}>
            {renderRadioIcon(value)}
            {/* <View>
                <Spacer style={{ width: 20 }} />
            </View> */}

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    optionContainer: {
        flex: 1,
        // width: '100%',
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
        // marginVertical: 5,
        // width: '100%'
        // borderColor: 'blue', 
        // borderWidth: 1
    },
    text: {
        color: 'grey'
    },
    icon: {
        color: 'grey'

    }, 
    selectedText:{
        color: '#FFC14D', 
        fontWeight: '700'
    }, 
    selectedContainer:{
        // flexGrow: 1,
        // flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        // width: '100%',
        borderBottomWidth: 2,
        marginHorizontal: 10,
        borderColor: '#FFC14D', 
        // borderWidth: 1
    }, 
    container:{
        // flexGrow: 1,
        // flex: 1,
        // borderBottomWidth: 5
        // width: '33.33%',
        // borderColor: 'blue', 
        // borderWidth: 1
    }
});

export default TabBarElement;
