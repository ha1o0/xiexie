import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as indexActions from '../../actions/index'

import '../../styles/articleDetail.scss'
class ArticleDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    getQueryString = param => {
        var reg = new RegExp("(^|&)"+ param +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  decodeURI(r[2]); return null;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.articleDetail != this.props.articleDetail) {
            this.refs.articleContent.innerHTML = nextProps.articleDetail.content
        }
    }

    render () {
        const {articleDetail} = this.props
        return (
            <div className="article-body">
                <h3 className="article-title">{articleDetail.title}</h3>
                <div className="article-content" ref={'articleContent'}></div>
            </div>
        )
    }

    componentDidMount () {
        const {indexActions} = this.props
        let reg = new RegExp("(^|&)"+ 'id' +"=([^&]*)(&|$)")
        let r = window.location.search.substr(1).match(reg)
        if (r!=null) {
            let id = decodeURI(r[2])
            indexActions.getArticleDetail(id)
        }
    }



}

ArticleDetail.propsType = {

}

const mapStateToProps = state => ({
    articleDetail: state.index.index.articleDetail
})

const mapDispatchToProps = (dispatch) => ({
    indexActions: bindActionCreators(indexActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail)

