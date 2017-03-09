import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as loginActions from '../../actions/hello/login'
import cs from 'classnames'

import '../../styles/login.scss'
class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            test: ''
        }
    }

    render() {
        const {isActive, loginActions} = this.props
        return (
            <div className={cs({'hidden': !isActive})} id="login">
                <div className="label label-primary login-label">
                    嗨, 又见面了
                </div>
                <div className="login-form">
                    <input type="text" className="form-control username" placeholder="用户名/邮箱"/>
                    <input type="text" className="form-control password" placeholder="密码"/>
                </div>
                <div>
                  <button className="btn btn-default login-btn">登录</button>
                </div>
                <div>
                    <button className="btn btn-default login-btn" onClick={loginActions.testApi}>Api</button>
                </div>
                <div className="test">{this.state.test}</div>
                <div>
                    <button className="btn btn-default back-btn" onClick={loginActions.cancelLogin}>返回</button>
                </div>
            </div>
        )
    }

}

Login.propTypes = {
    isActive: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    isActive: state.hello.hello.loginIsActive
})

const mapDispatchToProps = dispatch => ({
    loginActions: bindActionCreators(loginActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)