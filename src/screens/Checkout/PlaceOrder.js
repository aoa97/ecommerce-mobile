import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import Container from '../../components/Container'
import Button from '../../components/Button'
import Steps from '../../components/Steps'
import colors from '../../assets/colors/colors';

// Temp Dummy Data
import productData from '../../assets/data/productData'


const PlaceOrder = ({ navigation }) => {
    return (
        <View style={{flex: 1}}>
            <Container light title="Checkout" navigation={navigation} >
                <Steps position={2} />

                {/* User Details & Address */}
                <Text style={styles.title}>Shipping Address</Text>
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

                {/* Order Summary Products */}
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

                <Button icon='check' onPress={() => navigation.navigate('Order')}>Place Order</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 18,
        color: colors.black,
        marginBottom: 10
    },
    userDetailsWrapper: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    userDetailsText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        color: "#666666",
        marginBottom: 3
    },
    fillContainer: {
        width: 47,
        height: 47,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.gray_l,
        marginRight: 15
    },
    // Products
    products: {
        marginBottom: 15
    },
    prodWrapper: {
        width: "100%",
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
    },
    prodImage: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        marginRight: 15
    },
    prodName: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 15,
        color: colors.black
    },
    prodPrice: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        color: colors.black
    },
    // Summary Box
    summaryWrapper: {
        paddingBottom: 10,
        paddingHorizontal: 18,
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderTopColor: colors.background_1
    },
    summaryDetailsItem: {
        paddingBottom: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ItemTitle: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 15,
        color: colors.gray,
    },
    ItemValue: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        color: colors.black,
    },
})

export default PlaceOrder;