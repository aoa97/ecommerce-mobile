import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, FlatList, TextInput, StatusBar } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

import Container from '../../components/Container'
import Product from '../../components/Product';
import Button from '../../components/Button';
import colors from '../../assets/colors/colors';
import styles from './styles';

// Temp Dummy Data
import productData from '../../assets/data/productData';

const Saved = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Container title="Saved Products" navigation={navigation} >
                {/* Saved Items */}
                <FlatList
                    contentContainerStyle={{ paddingBottom: 170 }}
                    data={productData}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <Product product={item} />
                        </TouchableOpacity>
                    )}
                />
            </Container>
        </View>

    );
}

export default Saved;