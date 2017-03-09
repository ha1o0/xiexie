import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as helloActions from '../../actions/hello/hello'
import cs from 'classnames'
// import $ from 'jquery'

import '../../styles/hello.scss'

class Hello extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hello: 'yes'
        }
    }

    render() {
        const {isActive, helloActions} = this.props
        return (
            <div className={cs('container-fluid',{'hidden': !isActive})} id="hello">
                <p className="title">写写</p>
                <p className="sub-title">xie xie</p>
                <div className="btn-group">
                    <button className="btn btn-info" onClick={helloActions.showLogin}>登录</button>
                    <button className="btn btn-info" onClick={helloActions.showRegister}>注册</button>
                </div>
                <p className="look-look" onClick={helloActions.showIndex}>不注册,随便看看</p>
            </div>
        )
    }
}

Hello.propTypes = {
    isActive: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    isActive: state.hello.hello.helloIsActive
})

const mapDispatchToProps = dispatch => ({
    helloActions: bindActionCreators(helloActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Hello)