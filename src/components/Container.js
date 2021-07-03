import React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';

import IconButton from './IconButton';
import colors from '../assets/colors/colors';

const Container = ({ children, navigation, RightIconComponent, light, dark, style, title }) => {
    return (
        <View style={[style, { flex: 1, backgroundColor: light ? colors.white : dark ? colors.black : colors.background_1 }]}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

            <View style={styles.container}>
                <View style={styles.iconsWrapper}>
                    <View style={styles.iconsLeftWrapper}>
                        {navigation && (
                            <IconButton
                                style={{ marginBottom: 15, zIndex: 1 }}
                                size={23}
                                name='arrow-left'
                                onPress={() => navigation.goBack()}
                            />
                        )}
                        {title && (
                            <Text style={styles.title}>{title}</Text>
                        )}
                    </View>

                    {RightIconComponent && <RightIconComponent />}
                </View>

                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 18,
        paddingTop: 20,
        flex: 1
    },
    iconsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconsLeftWrapper: {
        flexDirection: 'row',
    },
    title: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 20,
        color: colors.black,
        marginLeft: 15,
        bottom: 3
    }
})

export default Container;