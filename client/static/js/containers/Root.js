import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import MainContainer from '../components/MainContainer'

class Root extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={MainContainer}/>
      </Router>
    )
  }
}

export default Root