import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Feather from 'react-native-vector-icons/Feather'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import RNBootSplash from 'react-native-bootsplash'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './store';
import Home from './screens/Home';
import Search from './screens/Search';
import Login from './screens/Login';
import Product from './screens/ProductScreen';
import Register from './screens/Register';
import Order from './screens/Order';
import Orders from './screens/Orders';
import Shipping from './screens/Checkout/Shipping'
import Payment from './screens/Checkout/Payment'
import PlaceOrder from './screens/Checkout/PlaceOrder'
import colors from './assets/colors/colors';
import Cart from './screens/Cart';
import Saved from './screens/Saved';
import Loader from './components/Loader';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const Menu = () => (
    <Drawer.Navigator
        initialRouteName="Home"
        drawerContentOptions={{
            activeTintColor: colors.black,
        }}
        drawerStyle={{
            backgroundColor: colors.white,
        }}
    >
        <Drawer.Screen
            name="Home"
            component={Home}
            options={{
                drawerIcon: ({ color }) => <Feather name='home' color={color} size={15} />,
            }}
        />
        <Drawer.Screen
            name="Cart"
            component={Cart}
            options={{
                drawerIcon: ({ color }) => <Feather name='shopping-bag' color={color} size={15} />,
            }}
        />
        <Drawer.Screen
            name="Saved"
            component={Saved}
            options={{
                drawerIcon: ({ color }) => <Material name='heart' color={color} size={15} />,
            }}
        />
    </Drawer.Navigator>
)


const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<Loader />}>
                <NavigationContainer onReady={() => RNBootSplash.hide()}>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Menu" component={Menu} />

                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="Search" component={Search} />
                        <Stack.Screen name="Product" component={Product} />
                        <Stack.Screen name="Cart" component={Cart} />
                        <Stack.Screen name="Saved" component={Saved} />
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Register" component={Register} />
                        <Stack.Screen name="Order" component={Order} />
                        <Stack.Screen name="Orders" component={Orders} />

                        {/* Payment Steps */}
                        <Stack.Screen name="Shipping" component={Shipping} />
                        <Stack.Screen name="Payment" component={Payment} />
                        <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

// import Play from './Play'
// const App = () => <Play />

export default App;