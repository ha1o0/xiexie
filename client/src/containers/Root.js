import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import MainContainer from '../components/MainContainer'
import Login from '../components/hello/Login'
import Register from '../components/hello/Register'
import Index from '../components/index/Index'
import HelloWorld from '../components/hello/HelloWorld'

class Root extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Index} />
      </Router>
    )
  }
}

export default Root