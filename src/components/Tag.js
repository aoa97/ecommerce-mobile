import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../assets/colors/colors';

const Tag = ({ title, success, text }) => {
    return (
        <>
            {text && (
                <View style={[styles.container, { paddingHorizontal: 0 }]}>
                    <Text style={[styles.title, { color: success ? "#0CDF7A" : "#E05050" }]}>{title}</Text>
                </View>
            )}
            {!text && (
                <View style={[styles.container, { backgroundColor: success ? "#0CDF7A" : "#E05050" }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 29,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: colors.white,
    }
})

export default Tag;