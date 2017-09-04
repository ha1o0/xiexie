import React, { Component, PropTypes } from 'react'
import cs from 'classnames'
import Notification from '../common/Notification'

import '../../styles/header.scss'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            extendBtnDisplay: false,
            blackSelected: false,
            salmonSelected: true
        }
    }

    selectBlackTheme = () => {
        this.setState({
            blackSelected: true,
            salmonSelected: false
        })
    }

    selectSalmonTheme = () => {
        this.setState({
            blackSelected: false,
            salmonSelected: true
        })
    }

    hoverIndexBtn = () => {
        this.setState({
            extendBtnDisplay: true
        })
    }

    hideExtendBtn = () => {
        this.setState({
            extendBtnDisplay: false
        })
    }

    hrefXiexie = () => {
        window.location = '/xiexie'
    }

    hrefIndex = () => {
        window.location = '/'
    }

    render() {
        return (
            <div>
              <Notification/>
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <div className="header" onMouseLeave={this.hideExtendBtn}>
                                <div className="navigator">
                                    <button className={cs('btn', {'hidden': !this.state.extendBtnDisplay})}>记忆</button>
                                    <button className="btn" onMouseOver={this.hoverIndexBtn} onClick={this.hrefIndex}>首页</button>
                                    <button className={cs('btn', {'hidden': !this.state.extendBtnDisplay})} onClick={this.hrefXiexie}>写写</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

              <div className="container-fluid">{this.props.children}</div>
              <div className="footer text-center">
                  Powered By ReactJs with bootstrap and Express framework
              </div>
            </div>
        );
    }
}

export default Header