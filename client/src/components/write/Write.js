import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as writeActions from '../../actions/write/write'
import cs from 'classnames'

import '../../styles/write.scss'
class Write extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '请输入文章标题',
            content: '以下为文章内容'
        }
    }

    changeTitle = (e) => {
        this.setState({
            title: this.refs.title.value
        })
    }

    changeContent = (e) => {
        this.setState({
            content: this.refs.content.innerHTML
        })
    }

    saveArticle = () => {
        const {writeActions} = this.props
        writeActions.saveArticle(this.state.title, this.state.content)
    }
    render () {
        const {isActive, writeActions} = this.props
        return (
            <div className='text-center col-lg-8 col-lg-offset-2 writer-body'>
                <div className="writer-options text-left">
                    <button className="btn btn-default option-btn">加粗</button>
                    <button className="btn btn-default option-btn">倾斜</button>
                    <button className="btn btn-default option-btn">h1</button>
                    <button className="btn btn-warning submit-btn" onClick={this.saveArticle}>保存</button>
                </div>
                <div className="writer-content text-center">
                    <input type="text" className="content-title" placeholder="请输入文章标题" ref='title' onBlur={this.changeTitle}/>
                    <hr/>
                    <div className="content-content" contentEditable="true" placeholder="以下为文章内容" ref="content"
                      onBlur={this.changeContent}></div>
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
    writeActions: bindActionCreators(writeActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Write)