/**
 * Created by sidney on 17/1/6.
 */

import fetch from 'isomorphic-fetch'
import * as types from '../../constants/ActionTypes'

export const showLogin = () => ({
    type: types.LOGIN_DISPLAY
})

export const showRegister = () => ({
    type: types.REGISTER_DISPLAY
})

export const showIndex = () => ({
    type: types.IGNORE_LOGIN
})