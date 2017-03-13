import React, { Component, PropTypes } from 'react'
import cs from 'classnames'
import { History } from 'react-router'

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
              <div className="header" onMouseLeave={this.hideExtendBtn}>
                <div className="multi-theme">
                  <div className="out-circle out-black" onClick={this.selectBlackTheme}>
                    <div className={cs("in-circle in-black",{'black-selected': this.state.blackSelected})}></div>
                  </div>
                  <div className="out-circle out-salmon" onClick={this.selectSalmonTheme}>
                    <div className={cs("in-circle in-salmon",{'salmon-selected': this.state.salmonSelected})}></div>
                  </div>
                </div>
                <div className="navigator">
                  <button className={cs('btn', {'hidden': !this.state.extendBtnDisplay})}>记忆</button>
                  <button className="btn" onMouseOver={this.hoverIndexBtn} onClick={this.hrefIndex}>首页</button>
                  <button className={cs('btn', {'hidden': !this.state.extendBtnDisplay})} onClick={this.hrefXiexie}>写写</button>
                </div>
                <div className="user-info"><img src="./src/img/xjs.jpeg" alt="" className="img-circle"/></div>
              </div>

              <div className="container-fluid">{this.props.children}</div>
              <div className="footer text-center">
                  Powered By ReactJs with bootstrap and Express framework
              </div>
            </div>
        );
    }
}

export default Header