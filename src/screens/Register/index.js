import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, FlatList, TextInput, StatusBar } from 'react-native';

import Container from '../../components/Container';
import Title from '../../components/Title';
import Button from '../../components/Button';
import colors from '../../assets/colors/colors';
import styles from './styles';

const Register = ({ navigation }) => {
    return (
        <Container dark style={{ paddingVertical: 22 }}>
            <StatusBar translucent backgroundColor="transparent" />

            {/* Text */}
            <View style={styles.textWrapper}>
                <Title light>Create a new account</Title>
                <Text style={styles.subtitle}>Please fill in the form to continue</Text>
            </View>

            {/* Form */}
            <View style={styles.formWrapper}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={colors.gray}
                    placeholder="Full Name"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={colors.gray}
                    placeholder="E-mail Address"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={colors.gray}
                    placeholder="Phone Number"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={colors.gray}
                    placeholder="Password"
                />

                <Button blue style={{ marginTop: 28 }}>SIGN UP</Button>
            </View>

            {/* Already have an account */}
            <TouchableOpacity style={styles.alreadyWrapper} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.alreadyText}>Already have an account?</Text>
                <Text style={styles.alreadyLink}>Sign In</Text>
            </TouchableOpacity>
        </Container>
    );
}

export default Register;