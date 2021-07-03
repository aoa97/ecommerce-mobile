import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

import Container from '../../components/Container'
import Button from '../../components/Button'
import Tag from '../../components/Tag';
import colors from '../../assets/colors/colors';
import styles from './styles';

// Temp Dummy Data
import productData from '../../assets/data/productData';
import ordersData from '../../assets/data/ordersData';

const Order = ({ navigation }) => {
    const order = ordersData[2]

    return (
        <View style={{ flex: 1 }}>
            <Container light title={`Order No ${order.id}`} navigation={navigation} >
                {/* User Details & Address */}
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.title}>Shipping Address</Text>

                    <View style={styles.shippingWrapper}>
                        <View style={styles.userDetailsWrapper}>
                            <View style={styles.fillContainer}>
                                <Feather
                                    size={23}
                                    color={colors.gray}
                                    name='map-pin'
                                />
                            </View>

                            <View>
                                <Text style={styles.userDetailsText}>Ahmed Usama</Text>
                                <Text style={styles.userDetailsText}>+201119784561</Text>
                                <Text style={styles.userDetailsText}>85 Geish St, Suez, Egypt</Text>
                            </View>
                        </View>

                        <Tag title="Not Delivered" />
                    </View>
                </View>

                <View style={{ marginVertical: 15 }}>
                    <Text style={styles.title}>Payment Method</Text>
                    <View style={styles.payWrapper}>
                        <Image
                            source={require('../../assets/images/paypal.png')}
                            style={{ width: 115, height: 49, resizeMode: 'contain' }}
                        />
                        <Tag success title="Paid" />
                    </View>
                </View>

                {/* Order Summary Products */}
                <>
                    <Text style={styles.title}>Order Summary</Text>
                    <ScrollView style={styles.products}>
                        {productData.map(p => (
                            <View key={p.id} style={styles.prodWrapper}>
                                <Image style={styles.prodImage} source={{ uri: p.image }} />
                                <View>
                                    <Text style={styles.prodName}>{p.brand} {p.model}</Text>
                                    <Text style={styles.prodPrice}>2 x ${p.price} = {2 * p.price}</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </>
            </Container >

            {/* Summary Box */}
            <View style={styles.summaryWrapper}>
                <View style={styles.summaryDetails}>
                    <View style={styles.summaryDetailsItem}>
                        <Text style={styles.ItemTitle}>Items</Text>
                        <Text style={styles.ItemValue}>$1000</Text>
                    </View>

                    <View style={styles.summaryDetailsItem}>
                        <Text style={styles.ItemTitle}>Shipping</Text>
                        <Text style={styles.ItemValue}>$50</Text>
                    </View>

                    <View style={styles.summaryDetailsItem}>
                        <Text style={styles.ItemTitle}>Tax</Text>
                        <Text style={styles.ItemValue}>$30</Text>
                    </View>

                    <View style={styles.summaryDetailsItem}>
                        <Text style={styles.ItemTitle}>Total</Text>
                        <Text style={styles.ItemValue}>$1080</Text>
                    </View>
                </View>

                <Button onPress={() => navigation.navigate('Orders')}>Pay with PayPal</Button>
            </View>
        </View>
    );
}

export default Order;