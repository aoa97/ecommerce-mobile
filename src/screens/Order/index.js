import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, FlatList, TextInput, StatusBar } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

import Container from '../../components/Container'
import Product from '../../components/Product';
import colors from '../../assets/colors/colors';
import styles from './styles';

// Temp Dummy Data
import productData from '../../assets/data/productData';

const Order = ({ navigation }) => {
    return (
        <Container navigation={navigation} title="Order No 123456789">
           <Text>Order Screen</Text>
        </Container>
    );
}

export default Order;