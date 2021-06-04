import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { AirbnbRating } from 'react-native-ratings';

import Container from '../../components/Container'
import Button from '../../components/Button'
import IconButton from '../../components/IconButton';
import Counter from '../../components/Counter';
import Title from '../../components/Title';
import styles from './styles'
import colors from '../../assets/colors/colors';

const ProductScreen = ({ navigation, route: { params: product } }) => {
    const LikeIcon = () => (
        <IconButton
            fill
            material
            size={20}
            name='heart'
        />
    )

    return (
        <Container light navigation={navigation} RightIconComponent={LikeIcon}>
            <Image
                source={{ uri: product.image }}
                style={styles.image}
            />

            <Title size={20}>{product.brand} {product.model}</Title>

            {/* Rating Panel  */}
            <View style={styles.ratingWrapper}>
                <AirbnbRating
                    isDisabled
                    showRating={false}
                    size={16}
                    defaultRating={4} // Dummy until connecting the DB values
                    ratingCount={5}
                />

                <TouchableOpacity style={styles.ratingReviewsBtn}>
                    <Text style={styles.ratingReviewsBtnValue}>124 reviews</Text>
                    <Feather name='chevron-right' size={15} color={colors.gray} />
                </TouchableOpacity>
            </View>

            {/* Specs */}
            <Text style={styles.specsText}>Specifications</Text>
            <ScrollView style={styles.specsWrapper}>
                <View style={styles.specsItem}>
                    <Text style={styles.specsItemTitle}>Processor</Text>
                    <Text style={styles.specsItemValue}>{product.processor}</Text>
                </View>

                <View style={styles.specsItem}>
                    <Text style={styles.specsItemTitle}>Graphics</Text>
                    <Text style={styles.specsItemValue}>{product.graphics}</Text>
                </View>

                <View style={styles.specsItem}>
                    <Text style={styles.specsItemTitle}>Memory</Text>
                    <Text style={styles.specsItemValue}>{product.ram}</Text>
                </View>

                <View style={styles.specsItem}>
                    <Text style={styles.specsItemTitle}>Storage</Text>
                    <Text style={styles.specsItemValue}>{product.storage}</Text>
                </View>

                <View style={styles.specsLastItem}>
                    <Text style={styles.specsItemTitle}>Resolution</Text>
                    <Text style={styles.specsItemValue}>{product.resolution}</Text>
                </View>
            </ScrollView>

            {/* Footer */}
            <View style={styles.footer}>
                <Counter style={{ width: "43%"}} />

                <View style={{ width: "57%", }}>
                    <Button icon='shopping-bag'>${product.price}</Button>
                </View>
            </View>
        </Container>
    );
}

export default ProductScreen;