import fetch from 'isomorphic-fetch'
import * as types from '../../constants/ActionTypes'

export const submitShort = (content) => {
    alert(content)
    return {
        type: types.SUBMIT_SHORT
    }
}
