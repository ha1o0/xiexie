import React, { Component, PropTypes } from 'react'
import Hello from './hello/Hello'
import Login from './hello/Login'
import Register from './hello/Register'
import Header from './common/Header'
import Index from './index/Index'

class MainContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <div>
            <Hello />
            <Login />
            <Register />
            <Index />
          </div>
        )
    }
}

export default MainContainer