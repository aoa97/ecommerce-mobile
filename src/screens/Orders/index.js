import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, FlatList, TextInput, StatusBar } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

import Container from '../../components/Container'
import Tag from '../../components/Tag';
import colors from '../../assets/colors/colors';
import styles from './styles';

// Temp Dummy Data
import productData from '../../assets/data/productData';
import ordersData from '../../assets/data/ordersData';

const Orders = ({ navigation }) => {
    return (
        <Container title="Orders" navigation={navigation} >
            <FlatList
                data={ordersData}
                keyExtractor={order => order.id}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        {/* Top */}
                        <View style={styles.topWrapper}>
                            <Text style={styles.orderId}>Order {item.id}</Text>
                            <Text style={styles.date}>{item.date}</Text>
                        </View>

                        {/* Mid */}
                        <View style={styles.midWrapper}>
                            <View style={styles.midItem}>
                                <Text style={styles.midItemTitle}>Total Amount:</Text>
                                <Text style={styles.midItemVal}>{item.totalAmount}</Text>
                            </View>
                            <View style={styles.midItem}>
                                <Text style={styles.midItemTitle}>Quantity:</Text>
                                <Text style={styles.midItemVal}>{item.quantity}</Text>
                            </View>
                        </View>

                        {/* Bottom */}
                        <View style={styles.bottomWrapper}>
                            <TouchableOpacity style={styles.buttonWrapper}>
                                <Text style={styles.buttonText}>Details</Text>
                            </TouchableOpacity>
                            <Tag
                                text
                                success={item.delivered}
                                title={item.delivered ? "Delivered" : "Not Delivered"}
                            />
                        </View>
                    </View>
                )}
            />
        </Container>
    );
}

export default Orders;