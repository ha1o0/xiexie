import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const indexState = {
    indexIsActive: true
}

const index = (state = indexState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
        case types.IGNORE_LOGIN:
            return {
                indexIsActive: true
            }
        default:
            return state
    }
}

export default combineReducers({
    index
})