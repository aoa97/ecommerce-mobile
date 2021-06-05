import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Feather from 'react-native-vector-icons/Feather'
import RNBootSplash from 'react-native-bootsplash'

import Home from './screens/Home';
import Search from './screens/Search';
import Login from './screens/Login';
import Product from './screens/ProductScreen';
import Register from './screens/Register';
import colors from './assets/colors/colors';
import Cart from './screens/Cart';

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
  </Drawer.Navigator>
)


const App = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Menu" component={Menu} />

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;