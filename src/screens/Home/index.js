import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, FlatList, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

import Container from '../../components/Container';
import Popular from '../../components/Popular';
import Title from '../../components/Title';
import Product from '../../components/Product';
import IconButton from '../../components/IconButton';
import colors from '../../assets/colors/colors';
import styles from './styles';

import productData from '../../assets/data/productData' // Temp Dummy Data 
import userData from '../../assets/data/userData' // Temp Dummy Data 


// temp for testing both UI Scenarions (Auth/Not)
const user = !userData ? userData : undefined


const Home = ({ navigation }) => {
    return (
        <Container>
            {/* Best Selling */}
            <FlatList
                style={styles.bestItemsWrapper}
                data={productData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Product", item)}>
                        <Product product={item} />
                    </TouchableOpacity>
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
            {/* Auth => User Avatar */}
            {user && (
                <Image
                    source={{ uri: user.image }}
                    style={styles.userAvatar}
                />
            )}

            {/* Not Auth => Welcome text */}
            {!user && (
                <View style={styles.textWrapper}>
                    <Text style={styles.message1}>Welcome!</Text>
                    <Text style={styles.message2}>Nice to meet you :)</Text>
                </View>
            )}

            {/* (Auth/Not) => Right Icons */}
            <View style={styles.iconsWrapper}>
                <IconButton
                    name='search'
                    size={23}
                    onPress={() => navigation.navigate("Search")}
                />

                <IconButton
                    name='shopping-bag'
                    size={23}
                    onPress={() => navigation.navigate("Cart")}
                />

                <IconButton
                    name='menu'
                    size={23}
                    onPress={() => navigation.openDrawer()}
                />
            </View>
        </View>

        {/* (Auth) =>Hello Text  */}
        {user && <Text style={styles.helloTxt}>Hello, <Text style={styles.nameTxt}>{user.name}</Text></Text>}

        {/* (Not Auth) => Login / Register Buttons */}
        {!user && (
            <View style={styles.authContainer}>
                <View style={styles.authBtnWrapper} onPress={() => navigation.navigate('Login')}>
                    <IconButton
                        fill
                        name='user'
                        onPress={() => navigation.navigate("Login")}
                    />

                    <Text style={styles.authBtnText}>Sign In</Text>
                </View>

                <TouchableOpacity style={styles.authBtnWrapper} onPress={() => navigation.navigate('Register')}>
                    <IconButton
                        fill
                        name='user-plus'
                        onPress={() => navigation.navigate("Register")}
                    />

                    <Text style={styles.authBtnText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )}

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