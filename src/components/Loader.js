import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import colors from '../assets/colors/colors';

const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color={colors.black} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
});

export default Loader;