import React from 'react';
import { TouchableOpacity, StyleSheet, Image, View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import colors from '../assets/colors/colors';

const Popular = ({ img, onPress, style }) => {
    return (
        <View style={[style, styles.container]}>
            <TouchableOpacity style={styles.minWrapper}>
                <Feather size={13} name='minus' color={colors.black} />
            </TouchableOpacity>

            <Text style={styles.value}>1</Text>

            <TouchableOpacity style={styles.plusWrapper}>
                <Feather size={13} name='plus' color={colors.white} />
            </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 120
    },
    minWrapper: {
        backgroundColor: colors.gray_l,
        width: 30,
        height: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    plusWrapper: {
        backgroundColor: colors.black,
        width: 30,
        height: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    value: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: colors.black,
    }
})

export default Popular;