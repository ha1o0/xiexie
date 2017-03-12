import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import MainContainer from '../components/MainContainer'
import Login from '../components/hello/Login'
import Register from '../components/hello/Register'
import Index from '../components/index/Index'
import HelloWorld from '../components/hello/HelloWorld'
import Header from '../components/common/Header'

class Root extends React.Component {
  render() {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={Header}>
                <IndexRoute component={Index}/>
                <Route path="/repos" component={HelloWorld}/>
                <Route path="/about" component={Index}/>
            </Route>
        </Router>
    )
  }
}

export default Root