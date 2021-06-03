import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../assets/colors/colors';
import styles from './styles'

const Product = ({ product }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: product.image }}
            />

            <View style={styles.textWrapper}>
                <Text style={styles.name}>{product.brand} {product.model}</Text>
                <Text style={styles.specs}>{product.processor}/{product.ram}/{product.storage}</Text>
                <Text style={styles.price}>${product.price}</Text>
            </View>

            <TouchableOpacity style={styles.likeIcon}>
                <MaterialCommunityIcons name='heart'  color={product.saved ? colors.black : colors.gray_l} size={22} />
            </TouchableOpacity>
        </View>
    );
}

export default Product;