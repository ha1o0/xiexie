import fetch from 'isomorphic-fetch'
import * as types from '../../constants/ActionTypes'

export const hideNotice = () => ({
    type: types.HIDE_NOTICE
})