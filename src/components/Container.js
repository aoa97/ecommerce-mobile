import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import colors from '../assets/colors/colors';

const Container = ({ children }) => {
    return (
        <View style={styles.window}>
            <StatusBar translucent backgroundColor="transparent" />

            <View style={styles.container}>
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    window: {
        flex: 1,
        backgroundColor: colors.background_1,
    },
    container: {
        marginHorizontal: 22,
        marginVertical: 32,
    }
})

export default Container;