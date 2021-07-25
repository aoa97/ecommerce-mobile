import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import colors from '../assets/colors/colors';

const Button = ({ style, children, onPress, blue, icon, loading }) => {
    return (
        <TouchableOpacity
            style={[style, styles.container, { backgroundColor: blue ? colors.blue : colors.black }]}
            onPress={onPress}
        >
            {loading && <ActivityIndicator color={colors.white} />}
            {!loading && <Text style={styles.text}>{children}</Text>}

            {icon && (
                <View style={styles.iconWrapper}>
                    <Feather
                        name={icon}
                        size={20}
                        color={colors.gray}
                    />
                </View>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 49,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    text: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        textTransform: 'uppercase',
        color: colors.white,
        width: '75%',
        textAlign: 'center'
    },
    iconWrapper: {
        width: 37,
        height: 37,
        borderRadius: 3,
        backgroundColor: "#262A34",
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Button;