import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native';

import { useDispatch, useSelector } from 'react-redux'

import { loginUser } from '../../actions/userActions'
import Container from '../../components/Container';
import Title from '../../components/Title';
import Button from '../../components/Button';
import colors from '../../assets/colors/colors';
import styles from './styles';

const Login = ({ navigation }) => {
    const dispatch = useDispatch()
    const { loading, user, error } = useSelector(state => state.userLogin)

    // States
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        // Validation will be added later
        dispatch(loginUser({
            email,
            password,
        }))
    }

    useEffect(() => {
        if (user) {
            navigation.navigate('Home')
        }
    }, [user, navigation])

    return (
        <Container dark style={{ paddingVertical: 22 }}>
            <StatusBar translucent backgroundColor="transparent" />

            {/* Text */}
            <View style={styles.textWrapper}>
                <Title light>Welcome Back!</Title>
                <Text style={styles.subtitle}>Please sign in to your account</Text>
            </View>

            {/* Form */}
            <View style={styles.formWrapper}>
                <TextInput
                    keyboardType='email-address'
                    style={styles.input}
                    placeholderTextColor={colors.gray}
                    placeholder="E-mail Address"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />
                <TextInput
                    secureTextEntry
                    style={styles.input}
                    placeholderTextColor={colors.gray}
                    placeholder="Password"
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                />

                <TouchableOpacity style={styles.forgot}>
                    <Text style={styles.subtitle}>Forgot Password?</Text>
                </TouchableOpacity>

                <Button
                    blue
                    style={{ marginTop: 28 }}
                    onPress={handleLogin}
                    loading={loading}
                >SIGN IN</Button>
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