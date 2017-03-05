import React, { Component } from 'react'

class HelloWorld extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hello: 'yes'
        }
    }

    changeHello() {
        this.setState({
            hello: this.state.hello == 'yes' ? 'no' : 'yes'
        })
    }

    render() {
      return (
        <div className="container-fluid">
        <h1>Hello, world~~~Hello, work</h1>
        <p>this is a simple section</p>
        <p>终于再次搭建成功!</p>
            <button className="btn btn-default" onClick={this.changeHello.bind(this)}>change</button>
            &nbsp;&nbsp;
            <button className="btn btn-info">{this.state.hello}</button>
        </div>
      )
    }
}

export default HelloWorld