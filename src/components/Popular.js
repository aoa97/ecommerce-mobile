import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import colors from '../assets/colors/colors';

const Popular = ({ img, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={img} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        width: 104,
        height: 49,
        borderRadius: 5,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: "#F7F7F7"
    }
})

export default Popular;