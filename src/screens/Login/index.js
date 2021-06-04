import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native';

import Container from '../../components/Container';
import Title from '../../components/Title';
import Button from '../../components/Button';
import colors from '../../assets/colors/colors';
import styles from './styles';

const Login = ({ navigation }) => {
    return (
        <Container dark  style={{ paddingVertical: 22 }}>
            <StatusBar translucent backgroundColor="transparent" />

            {/* Text */}
            <View style={styles.textWrapper}>
                <Title light>Welcome Back!</Title>
                <Text style={styles.subtitle}>Please sign in to your account</Text>
            </View>

            {/* Form */}
            <View style={styles.formWrapper}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={colors.gray}
                    placeholder="E-mail Address"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={colors.gray}
                    placeholder="Password"
                />

                <TouchableOpacity style={styles.forgot}>
                    <Text style={styles.subtitle}>Forgot Password?</Text>
                </TouchableOpacity>

                <Button blue style={{ marginTop: 28 }}>SIGN IN</Button>
            </View>

            {/* Don't have an account */}
            <TouchableOpacity style={styles.dontWrapper} onPress={() => navigation.navigate("Register")}>
                <Text style={styles.dontText}>Don't have an account?</Text>
                <Text style={styles.dontLink}>Sign Up</Text>
            </TouchableOpacity>
        </Container>
    );
}

export default Login;