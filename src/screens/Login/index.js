import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, FlatList, TextInput, StatusBar } from 'react-native';

import Title from '../../components/Title';
import colors from '../../assets/colors/colors';
import styles from './styles';

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
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

                <TouchableOpacity style={styles.btnWrapper}>
                    <Text style={styles.btnText}>SIGN IN</Text>
                </TouchableOpacity>
            </View>

            {/* Don't have an account */}
            <TouchableOpacity style={styles.dontWrapper} onPress={() => navigation.navigate("Register")}>
                <Text style={styles.dontText}>Don't have an account?</Text>
                <Text style={styles.dontLink}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;