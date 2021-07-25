import axios from 'axios'
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_RESPONSE } from '../constants/productConstants'


// const url = 'https://au-ecommerce-api.herokuapp.com/products'
const url = 'http://192.168.1.7:3000/products'

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data } = await axios.get(url)

        dispatch({ type: PRODUCT_LIST_RESPONSE, payload: data })
    } catch (e) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: "There's an error" })
    }
}