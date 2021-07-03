import React from 'react';
import { KeyboardAvoidingView, Text, StyleSheet, TextInput } from 'react-native';
import Container from '../../components/Container'
import Button from '../../components/Button'
import Steps from '../../components/Steps'
import colors from '../../assets/colors/colors';

const Shipping = ({ navigation }) => {
    return (
        <Container light title="Checkout" navigation={navigation} >
            <Steps position={0} />

            <KeyboardAvoidingView>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={colors.gray}
                    placeholder="Enter Address"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={colors.gray}
                    placeholder="Enter City"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={colors.gray}
                    placeholder="Enter Country"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={colors.gray}
                    placeholder="Enter Postal Code"
                />

                <Button style={styles.btn} onPress={() => navigation.navigate('Payment')}>Continue</Button>
            </KeyboardAvoidingView>
        </Container>
    );
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 49,
        borderRadius: 5,
        paddingLeft: 20,
        marginTop: 28,
        backgroundColor: colors.background_1,
        color: colors.black,
        fontFamily: 'Montserrat-Medium',
        fontSize: 15,
    },
    btn: {
        marginTop: 28,
    }
})

export default Shipping;