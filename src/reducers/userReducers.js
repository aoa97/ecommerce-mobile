import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_RESPONSE,
    USER_REGISTER_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_RESPONSE,
    USER_LOGIN_FAIL,
    USER_LOGOUT
} from '../constants/userConstants'

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true }
        case USER_REGISTER_RESPONSE:
            return { loading: false, success: true }
        case USER_REGISTER_FAIL:
            return { loading: false, success: false }
        default:
            return state
    }
}

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }
        case USER_LOGIN_RESPONSE:
            return { loading: false, success: true, user: action.payload }
        case USER_LOGIN_FAIL:
            return { loading: false, success: false }
        default:
            return state
    }
}