import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
// import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import StepIndicator from 'react-native-step-indicator';
import colors from './assets/colors/colors';

const Test = () => {
    const [currentPosition, setCurrentPosition] = useState(0)
    console.log(currentPosition);

    const secondIndicatorStyles = {
        stepIndicatorSize: 30,
        currentStepIndicatorSize: 40,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#fe7013',
        stepStrokeWidth: 3,
        separatorStrokeFinishedWidth: 4,
        stepStrokeFinishedColor: '#fe7013',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#fe7013',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#fe7013',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#fe7013',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 13,
        currentStepLabelColor: '#fe7013',
    };

    return (
        <View style={{ flex: 1, justifyContent: 'space-between' , padding: 50}}>
            <StepIndicator
                customStyles={secondIndicatorStyles}
                stepCount={3}
                currentPosition={currentPosition}
                onPress={(position) => setCurrentPosition(position)}
                labels={[
                    'Shipping',
                    'Payment',
                    'Place Order',
                ]}

            />

            <Button
                title="Previous"
                onPress={() => {
                    if(currentPosition > 0){
                        setCurrentPosition(currentPosition - 1)
                    }
                }}
            />
           
            <Button
                title="Next"
                onPress={() => setCurrentPosition(currentPosition + 1)}
            />
        </View>
    )
}



export default Test