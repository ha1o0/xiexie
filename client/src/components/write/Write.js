import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as indexActions from '../../actions/index/index'
import cs from 'classnames'

import '../../styles/write.scss'
class Write extends Component {
    constructor(props) {
        super(props)
        this.state = {
            test: '123456789'
        }
    }

    render () {
        const {isActive, indexActions} = this.props
        return (
            <div className='text-center col-lg-8 col-lg-offset-2 writer-body'>
                <div className="writer-options text-left">
                    <button className="btn btn-default option-btn">加粗</button>
                    <button className="btn btn-default option-btn">倾斜</button>
                    <button className="btn btn-default option-btn">h1</button>
                    <button className="btn btn-warning submit-btn">保存</button>
                </div>
                <div className="writer-content text-center">
                    <input type="text" className="content-title" placeholder="请输入文章标题"/>
                    <hr/>
                    <div className="content-content" contentEditable="true" placeholder="以下为文章内容"></div>
                </div>
            </div>
        )
    }
}


Write.propTypes = {
    isActive: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    isActive: state.index.index.indexIsActive
})

const mapDispatchToProps = dispatch => ({
    indexActions: bindActionCreators(indexActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Write)