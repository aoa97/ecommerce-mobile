import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from '@react-native-community/async-storage'
// Reducers
import { productListReducer } from './reducers/productReducers'
import { userRegisterReducer, userLoginReducer } from './reducers/userReducers'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userLogin']
}

const reducer = combineReducers({
    // Product
    productList: productListReducer,
    // User
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer
})
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk))) // Remove composeWithDevTools in Productions    
export const persistor = persistStore(store)

