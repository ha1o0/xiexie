/**
 * Created by sidney on 17/1/8.
 */
import fetch from 'isomorphic-fetch'
import * as types from '../../constants/ActionTypes'

export const registerUser = (email, password) => {
    // console.log(email)
    // console.log(password)
    let userInfo = 'email=' + email + '&password=' + password
    let jsonData = JSON.stringify(userInfo)
    fetch('http://localhost:8000/api/registerUser', {
        mode: 'cors',
        method: 'POST',
        cache: 'default',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: userInfo
    })
    .then((response) => {
        console.log(1)
        console.log(response)
    }
    )
    return {
        type: types.REGISTER
    }
}

export const cancelRegister = () => ({
    type: types.CANCEL_REGISTER
})