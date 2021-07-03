import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, FlatList, TextInput, StatusBar } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

import Container from '../../components/Container'
import CartItem from '../../components/CartItem';
import Button from '../../components/Button';
import colors from '../../assets/colors/colors';
import styles from './styles';

// Temp Dummy Data
import productData from '../../assets/data/productData';

const Cart = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Container title="Shopping Cart" navigation={navigation} >
                {/* Cart Items */}
                <FlatList
                    style={styles.bestItemsWrapper}
                    data={productData}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate("Product", item)}>
                            <CartItem product={item} />
                        </TouchableOpacity>
                    )}
                    showsVerticalScrollIndicator={false}
                />

            </Container>
            {/* Summary Box */}
            <View style={styles.summaryWrapper}>
                <View style={styles.summaryDetails}>
                    <View style={styles.summaryDetailsItem}>
                        <Text style={styles.ItemTitle}>Product Quantity</Text>
                        <Text style={styles.ItemValue}>2</Text>
                    </View>

                    <View style={styles.summaryDetailsItem}>
                        <Text style={styles.ItemTitle}>Total Price</Text>
                        <Text style={styles.ItemValue}>$2.212</Text>
                    </View>
                </View>

                <Button icon='credit-card' onPress={() => navigation.navigate('Shipping')}>CHECKOUT</Button>
            </View>
        </View>

    );
}

export default Cart;