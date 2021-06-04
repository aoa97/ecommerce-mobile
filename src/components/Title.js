import React from 'react';
import { Text, View } from 'react-native';

import colors from '../assets/colors/colors';

const Title = ({ children, style, light, size }) => {
    return (
        <View style={style}>
            <Text
                style={{
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: size ? size : 18,
                    color: light ? colors.white : colors.black
                }}
            >
                {children}
            </Text>
        </View>
    );
}
export default Title;