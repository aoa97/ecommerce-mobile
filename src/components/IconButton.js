import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'

import colors from '../assets/colors/colors';

const IconButton = ({ onPress, name, size, color, fill, material, ...otherProps }) => {
    return (
        <>
            {fill && (
                <>
                    {material && (
                        <TouchableOpacity style={styles.fillContainer} onPress={onPress} {...otherProps}>
                            <Material color={color ? color : colors.black} name={name} size={size ? size : 17} />
                        </TouchableOpacity>
                    )}
                    {!material && (
                        <TouchableOpacity style={styles.fillContainer} onPress={onPress} {...otherProps}>
                            <Feather color={color ? color : colors.black} name={name} size={size ? size : 17} />
                        </TouchableOpacity>
                    )}
                </>
            )}

            {!fill && (
                <>
                    {material && (
                        <TouchableOpacity onPress={onPress} {...otherProps}>
                            <Material color={color ? color : colors.black} name={name} size={size ? size : 17} />
                        </TouchableOpacity>
                    )}
                    {!material && (
                        <TouchableOpacity onPress={onPress} {...otherProps}>
                            <Feather color={color ? color : colors.black} name={name} size={size ? size : 17} />
                        </TouchableOpacity>
                    )}
                </>

            )}
        </>
    );
}


const styles = StyleSheet.create({
    fillContainer: {
        width: 38,
        height: 38,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.gray_l,
    }
})


export default IconButton;