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
            id: ''
        }
    }

    toArticleDetail = (id) => {
        window.location = '/articleDetail?id=' + id
    }

    render() {
        const {authorName, time, labels, title, content, id} = this.props
        var articleId = this.props.id
        return (
            <div className="blog-abstract text-left" onClick={this.toArticleDetail.bind(this, articleId)}>
                <div className="abstract-header">
                    <img src='./src/img/xjs.jpeg' alt="" className="head-img img-circle"/>
                    <p className="author-name">{authorName}</p>
                    <p className="time">{time}</p>
                </div>
                <h4 className="title">{title}</h4>
                <div className="content" ref={'content'}></div>
            </div>
        )
    }

    componentDidMount () {
        this.refs.content.innerHTML = this.props.content
    }
}

export default BlogAbstract