import React from 'react';
import { View, Text } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import colors from '../assets/colors/colors'

const Steps = ({ position }) => {
    const secondIndicatorStyles = {
        labelColor: colors.black,
        labelFontFamily: 'Montserrat-Medium',

        // Current
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: colors.black,
        currentStepLabelColor: colors.black,

        // Unfinished
        stepStrokeWidth: 3,
        stepIndicatorLabelUnFinishedColor: colors.gray,
        stepIndicatorUnFinishedColor: colors.white,
        stepStrokeUnFinishedColor: colors.gray,
        separatorUnFinishedColor: colors.gray,

        // Finished
        stepIndicatorFinishedColor: colors.black,
        stepStrokeFinishedColor: colors.black,
        separatorFinishedColor: colors.black,
    };

    return (
        <View style={{ marginTop: 15, marginBottom: 15 }}>
            <StepIndicator
                customStyles={secondIndicatorStyles}
                stepCount={3}
                currentPosition={position}
                // onPress={(position) => setCurrentPosition(position)}
                labels={[
                    'Shipping',
                    'Payment',
                    'Place Order',
                ]}

            />
        </View>
    );
}

export default Steps;