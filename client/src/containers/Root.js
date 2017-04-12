import React from 'react'
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router'
import MainContainer from '../components/MainContainer'
import Login from '../components/hello/Login'
import Register from '../components/hello/Register'
import Index from '../components/index/Index'
import HelloWorld from '../components/hello/HelloWorld'
import Header from '../components/common/Header'
import Xiexie from '../components/write/Write'
import ArticleDetail from '../components/index/ArticleDetail'

class Root extends React.Component {
  render() {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={Header}>
                <IndexRoute component={Index}/>
                <Route path="/xiexie" component={Xiexie}/>
                <Route path="/articleDetail" component={ArticleDetail}/>
            </Route>
        </Router>
    )
  }
}

export default Root