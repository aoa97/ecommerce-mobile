import axios from 'axios'
import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_RESPONSE,
    USER_REGISTER_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_RESPONSE,
    USER_LOGIN_FAIL
} from '../constants/userConstants'

// const url = 'https://au-ecommerce-api.herokuapp.com/users'
const url = 'http://192.168.1.7:3000/users'

export const registerUser = (userData) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST })

        await axios.post(`${url}/register`, userData, { header: { 'Content-Type': 'application/json' } })

        dispatch({ type: USER_REGISTER_RESPONSE })

        const { email, password } = userData
        dispatch(loginUser({ email, password }))
    } catch (e) {
        dispatch({ type: USER_REGISTER_FAIL, payload: "There's an error" })
    }
}

export const loginUser = (userData) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })

        const { data } = await axios.post(`${url}/login`, userData, { header: { 'Content-Type': 'application/json' } })

        dispatch({ type: USER_LOGIN_RESPONSE, payload: data })
    } catch (e) {
        dispatch({ type: USER_LOGIN_FAIL, payload: "There's an error" })
    }
}

