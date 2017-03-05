import fetch from 'isomorphic-fetch'
import * as types from '../../constants/ActionTypes'

export const login = () => ({
    type: types.LOGIN
})

export const cancelLogin = () => ({
    type: types.CANCEL_LOGIN
})

export const testApi = () => {
    fetch('http://localhost:8000/api/getUsers', {
        mode: 'cors',
        method: 'GET',
        cache: 'default'
    })
    .then(response => console.log(response))
    return {
        type: types.LOGIN
    }
}