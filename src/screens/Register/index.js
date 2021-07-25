import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import { registerUser } from '../../actions/userActions'
import Container from '../../components/Container';
import Title from '../../components/Title';
import Button from '../../components/Button';
import colors from '../../assets/colors/colors';
import styles from './styles';

const Register = ({ navigation }) => {
    const dispatch = useDispatch()
    const { loading, success, error } = useSelector(state => state.userRegister)

    // States
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    const handleRegister = () => {
        // Validation will be added later
        dispatch(registerUser({
            email,
            password,
            name,
            phone
        }))
    }

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
                    value={name}
                    onChangeText={(name) => setName(name)}
                />
                <TextInput
                    keyboardType='email-address'
                    style={styles.input}
                    placeholderTextColor={colors.gray}
                    placeholder="E-mail Address"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />
                <TextInput
                    keyboardType='numeric'
                    style={styles.input}
                    placeholderTextColor={colors.gray}
                    placeholder="Phone Number"
                    value={phone}
                    onChangeText={(phone) => setPhone(phone)}
                />
                <TextInput
                    secureTextEntry
                    style={styles.input}
                    placeholderTextColor={colors.gray}
                    placeholder="Password"
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                />
                <Button
                    blue
                    loading={loading}
                    style={{ marginTop: 28 }}
                    onPress={handleRegister}
                >SIGN UP</Button>
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