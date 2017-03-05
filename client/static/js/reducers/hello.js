import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const helloState = {
    helloIsActive: true,
    loginIsActive: false,
    registerIsActive: false
}

const hello = (state = helloState, action) => {
    switch (action.type) {
        case types.LOGIN_DISPLAY:
            return {
                helloIsActive: false,
                loginIsActive: true,
                registerIsActive: false
            }
        case types.CANCEL_LOGIN:
        case types.CANCEL_REGISTER:
            return {
                helloIsActive: true,
                loginIsActive: false,
                registerIsActive: false
            }
        case types.REGISTER_DISPLAY:
            return {
                helloIsActive: false,
                loginIsActive: false,
                registerIsActive: true
            }
        case types.IGNORE_LOGIN:
            return {
                helloIsActive: false,
                loginIsActive: false,
                registerIsActive: false
            }
        default:
            return state
    }
}

export default combineReducers({
    hello
})