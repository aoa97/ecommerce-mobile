import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import IndexScreen from './play/screens/IndexScreen';
import { BlogProvider } from './play/context/BlogContext';

const StackNavigator = createStackNavigator()

const Play = () => {
    return (
        <BlogProvider >
            <NavigationContainer>
                <StackNavigator.Navigator>
                    <StackNavigator.Screen name="Index" component={IndexScreen} />
                </StackNavigator.Navigator>
            </NavigationContainer>
        </BlogProvider>
    );
}

export default Play;