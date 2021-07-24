import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// Reducers
import { productListReducer } from './reducers/productReducers'

const reducer = combineReducers({
    productList: productListReducer
})

// Remove composeWithDevTools in Productions 
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store