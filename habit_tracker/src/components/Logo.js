import React from "react";
import { View, Text , StyleSheet} from 'react-native';

const Logo = () => {
    return <Text style={styles.textStyle}>
        Check-in Circle
    </Text>
}

const styles = StyleSheet.create({
    textStyle :{
        fontSize: 30, 
        fontWeight: "800",
        marginBottom: 50
    }
})

export default Logo;