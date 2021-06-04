import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, FlatList, TextInput, StatusBar } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

import Container from '../../components/Container'
import Product from '../../components/Product';
import colors from '../../assets/colors/colors';
import styles from './styles';

// Temp Dummy Data
import productData from '../../assets/data/productData';

const Search = ({ navigation }) => {
    return (
        <Container navigation={navigation} >
            <Text style={styles.title}>What laptop are you looking for?</Text>

            {/*  Search Box */}
            <View style={styles.searchBoxWrapper}>
                <Feather color={colors.gray} name='search' size={20} />
            
                <TextInput
                    style={styles.searchBoxInput}
                    placeholderTextColor={colors.gray}
                    placeholder="Search"
                />
            </View>

            {/* Results  */}
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
    );
}

export default Search;