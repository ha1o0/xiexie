import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as indexActions from '../../actions/index/index'
import cs from 'classnames'

import '../../styles/blogAbstract.scss'
class BlogAbstract extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="blog-abstract text-left">
                <div className="abstract-header">
                    <img src='./src/img/xjs.jpeg' alt="" className="head-img img-circle"/>
                    <p className="author-name">行走的猪</p>
                    <p className="time">2017-03-08 15:25</p>
                    <p className="labels">
                        <span className="label label-warning">php</span>
                        <span className="label label-info">nodejs</span>
                    </p>
                </div>
                <h4 className="title">这是一个标题</h4>
                <p className="content">为了兼容各主流浏览器并支持这些主流浏览器的较低版本，
                    在基于Webkit的Chrome和Safari等浏览器上使用box-shadow属性时，
                    我们需要将属性的名称写成-webkit-box-shadow的形式。Firefox浏览器则需要写成-moz-box-shadow的形式。
                </p>
            </div>
        )
    }
}

export default BlogAbstract