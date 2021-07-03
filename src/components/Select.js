import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import colors from '../assets/colors/colors';

const Select = () => {
    const [selected, setSelected] = useState(1)

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.item, { backgroundColor: selected === 1 ? "#EBEBEB" : "#F9F9F9" }]}
                onPress={() => setSelected(1)}
            >
                <View style={styles.leftContainer}>
                    <Feather color={colors.black} name='credit-card' size={20} />
                    <Text style={styles.itemText}>PayPal or Credit Card</Text>
                </View>

                <View style={styles.circle}>
                    {selected === 1 && <View style={styles.circleChild} />}
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.item, { backgroundColor: selected === 2 ? "#EBEBEB" : "#F9F9F9" }]}
                onPress={() => setSelected(2)}
            >
                <View style={styles.leftContainer}>
                    <Feather color={colors.black} name='dollar-sign' size={20} />
                    <Text style={styles.itemText}>Cash on Delivery</Text>
                </View>

                <View style={styles.circle}>
                    {selected === 2 && <View style={styles.circleChild} />}
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    item: {
        width: "100%",
        padding: 20,
        borderRadius: 5,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemText: {
        color: colors.black,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        marginLeft: 14
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    circle: {
        height: 16,
        width: 16,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circleChild: {
        backgroundColor:
            colors.black,
        width: "60%",
        height: "60%",
        borderRadius: 50
    }
})

export default Select;