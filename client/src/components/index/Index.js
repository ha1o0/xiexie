import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BlogAbstract from './BlogAbstract'
import * as indexActions from '../../actions/index/index'
import cs from 'classnames'

import '../../styles/index.scss'
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            test: '123456789'
        }
    }

    render () {
        const {isActive, indexActions} = this.props
        return (
            <div className='text-center col-lg-6 col-lg-offset-3 index'>
                <div>
                    <BlogAbstract/>
                    <BlogAbstract/>
                    <BlogAbstract/>
                    <BlogAbstract/>
                </div>
            </div>
        )
    }
}


Index.propTypes = {
    isActive: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    isActive: state.index.index.indexIsActive
})

const mapDispatchToProps = dispatch => ({
    indexActions: bindActionCreators(indexActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)