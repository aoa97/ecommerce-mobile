import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

import Container from '../../components/Container';
import Popular from '../../components/Popular';
import Title from '../../components/Title';
import Product from '../../components/Product/index';
import colors from '../../assets/colors/colors';
import styles from './styles';
import productData from '../../assets/data/productData' // Temp Dummy Data 

const Home = ({ navigation }) => {
    return (
        <Container scroll>
            {/* Best Selling */}
            <FlatList
                style={styles.bestItemsWrapper}
                data={productData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Product product={item} />
                )}
                ListHeaderComponent={() => <FlatHeader navigation={navigation} />}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
}

const FlatHeader = ({ navigation }) => (
    <>
        {/* Header */}
        <View style={styles.headerContainer}>
            <View style={styles.textWrapper}>
                <Text style={styles.message1}>Welcome!</Text>
                <Text style={styles.message2}>Nice to meet you :)</Text>
            </View>

            <View style={styles.iconsWrapper}>
                <TouchableOpacity>
                    <Feather color={colors.black} name='search' size={23} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Feather color={colors.black} name='shopping-bag' size={23} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Feather color={colors.black} name='menu' size={23} />
                </TouchableOpacity>
            </View>
        </View>

        {/* Authentication */}
        <View style={styles.authContainer}>
            <TouchableOpacity style={styles.authBtnWrapper} onPress={() => navigation.navigate('Login')}>
                <View style={styles.authBtn}>
                    <Feather color={colors.black} name='user' size={17} />
                </View>
                <Text style={styles.authBtnText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.authBtnWrapper} onPress={() => navigation.navigate('Register')}>
                <View style={styles.authBtn}>
                    <Feather color={colors.black} name='user-plus' size={17} />
                </View>
                <Text style={styles.authBtnText}>Sign Up</Text>
            </TouchableOpacity>
        </View>

        {/* Carousel */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
                <ImageBackground style={styles.carouselProductWrapper} source={require('../../assets/images/carousel-1.png')}>
                    <View style={styles.carouselOverlay}>
                        <Text style={styles.carouselProductText}>Premium Ultrabooks</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity>
                <ImageBackground style={styles.carouselProductWrapper} source={require('../../assets/images/carousel-2.png')}>
                    <View style={styles.carouselOverlay}>
                        <Text style={styles.carouselProductText}>Recommended Notebooks</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </ScrollView>

        {/* Popular Brands */}
        <View style={styles.popularContainer}>
            <Title>Popular Brands</Title>

            <ScrollView style={styles.popularItemsWrapper} horizontal showsHorizontalScrollIndicator={false}>
                <Popular img={require('../../assets/images/apple.png')} />
                <Popular img={require('../../assets/images/asus.png')} />
                <Popular img={require('../../assets/images/lenovo.png')} />
                <Popular img={require('../../assets/images/dell.png')} />
                <Popular img={require('../../assets/images/hp.png')} />
            </ScrollView>
        </View>

        <Title style={styles.bestItemsText}>Best Selling</Title>
    </>
)

export default Home;