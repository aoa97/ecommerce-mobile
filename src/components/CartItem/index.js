import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import Counter from '../Counter'
import colors from '../../assets/colors/colors';
import styles from './styles'

const CartItem = ({ product }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: product.image }}
            />

            <View style={styles.verticalContainer}>
                <View style={styles.textWrapper}>
                    <Text style={styles.name}>{product.brand} {product.model}</Text>
                    <Text style={styles.specs}>{product.processor}/{product.ram}/{product.storage}</Text>
                    <Text style={styles.price}>${product.price}</Text>
                </View>

                <View style={styles.cartButtons}>
                    <TouchableOpacity style={styles.removeWrapper}>
                        <Feather name='trash-2'  size={15} color={colors.gray} />
                        <Text style={styles.removeText}>Remove</Text>
                    </TouchableOpacity>

                    <Counter />
                </View>
            </View>
        </View>
    );
}

export default CartItem;