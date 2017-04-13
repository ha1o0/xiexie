import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BlogAbstract from './BlogAbstract'
import * as indexActions from '../../actions/index/index'
import cs from 'classnames'

import '../../styles/index.scss'
class Index extends Component {
    constructor (props) {
        super(props)
        this.state = {
            test: '123456789'
        }
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.articlesDataArr != this.props.articlesDataArr) {
            let title = ''
            let time = ''
            let contentText = ''
            let id = ''
            for(let i = 0; i < nextProps.articlesDataArr.length; i++) {
                title = nextProps.articlesDataArr[i].title
                contentText = nextProps.articlesDataArr[i].contentText
                id = nextProps.articlesDataArr[i]._id
                nextProps.articlesArr.push(<BlogAbstract authorName="行走的猪" id={id} time="2017-04-04" title={title}
                                                         content={contentText} key={new Date().getTime() + i}/>)
            }
        }
    }

    componentWillMount () {
        const {indexActions} = this.props
        indexActions.getArticles()
    }

    render () {
        const {isActive, indexActions, articlesArr} = this.props
        return (
            <div className='text-center col-lg-6 col-lg-offset-3 index-body'>
                {articlesArr}
            </div>
        )
    }

    componentDidMount () {

    }
}


Index.propTypes = {
    isActive: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    isActive: state.index.index.indexIsActive,
    articlesDataArr: state.index.index.articlesDataArr,
    articlesArr: state.index.index.articlesArr
})

const mapDispatchToProps = dispatch => ({
    indexActions: bindActionCreators(indexActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)