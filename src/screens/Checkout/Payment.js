import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Container from '../../components/Container'
import Button from '../../components/Button'
import Steps from '../../components/Steps'
import Select from '../../components/Select';
import colors from '../../assets/colors/colors';

const Payment = ({ navigation }) => {
    return (
        <Container light title="Checkout" navigation={navigation} >
            <Steps position={1} />

            <View>
                <Text style={styles.title}>Select Payment Method</Text>
                <Select  />

                <Button style={styles.btn} onPress={() => navigation.navigate('PlaceOrder')}>Continue</Button>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    btn: {
    },
    title: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 18,
        color: colors.black,
    }
})

export default Payment;