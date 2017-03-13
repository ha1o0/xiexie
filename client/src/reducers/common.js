import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const initialState = {
    noticeIsActive: false,
    notificationType: 'success',
    noticeContent: ''
}

const common = (state = initialState, action) => {
    switch (action.type) {
        case types.NOTICE:
            return {
                ...state,
                noticeIsActive: true,
                noticeContent: action.noticeContent,
                notificationType: action.notificationType
            }
        case types.HIDE_NOTICE:
            return {
                ...state,
                noticeIsActive: false,
                notificationType: 'success',
                noticeContent: ''
            }
        default:
            return state
    }
}

export default combineReducers({
    common
})