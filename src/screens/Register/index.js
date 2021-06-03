import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, FlatList, TextInput, StatusBar } from 'react-native';

import Title from '../../components/Title';
import colors from '../../assets/colors/colors';
import styles from './styles';

const Register = ({ navigation }) => {
    return (
        <View style={styles.container}>
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

                <TouchableOpacity style={styles.btnWrapper}>
                    <Text style={styles.btnText}>SIGN Up</Text>
                </TouchableOpacity>
            </View>

            {/* Already have an account */}
            <TouchableOpacity style={styles.alreadyWrapper} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.alreadyText}>Already have an account?</Text>
                <Text style={styles.alreadyLink}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Register;