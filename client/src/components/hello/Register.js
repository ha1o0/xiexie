import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as registerActions from '../../actions/hello/register'
import cs from 'classnames'

import '../../styles/register.scss'
class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            repassword: ''
        }
    }

    changeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    changePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    changeRepassword(e) {
        this.setState({
            repassword: e.target.value
        })
    }


    registerUser() {
        let email = this.state.email
        let password = this.state.password
        this.props.registerActions.registerUser(email, password)
    }

    render() {
        const { registerActions, isActive } = this.props
        return(
            <div className={cs({'hidden': !isActive})} id="register">
                <div className="label label-primary register-label">
                    一会儿就行了
                </div>
                <div className="register-form">
                    <input type="text" className="form-control username" placeholder="邮箱" onChange={this.changeEmail.bind(this)}/>
                    <input type="text" className="form-control password" placeholder="密码" onChange={this.changePassword.bind(this)}/>
                    <input type="text" className="form-control password" placeholder="重复密码" onChange={this.changeRepassword.bind(this)}/>
                </div>
                <div>
                    <button className="btn btn-default register-btn" onClick={this.registerUser.bind(this)}>注册</button>
                </div>
                <div>
                    <button className="btn btn-default back-btn" onClick={registerActions.cancelRegister}>返回</button>
                </div>
            </div>
        )
    }
}

Register.propsType = {
    isActive: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    isActive: state.hello.hello.registerIsActive
})

const mapDispatchToProps = dispatch => ({
    registerActions: bindActionCreators(registerActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)