import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as writeActions from '../../actions/write/write'
import cs from 'classnames'
import $ from 'jquery'

import '../../styles/write.scss'
class Write extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            contentText: ''
        }
    }

    changeTitle = (e) => {
        this.setState({
            title: this.refs.title.value
        })
    }

    changeContent = (e) => {
        let contentHtml = this.refs.content.innerHTML
        let string = this.refs.content.innerText
        let contentText = (string.length > 250 ? string.substring(0, 250) : string) + '...'
        this.setState({
            content: contentHtml,
            contentText: contentText
        })
    }

    saveArticle = () => {
        const {writeActions} = this.props
        if (!this.state.title || !this.state.content) {
            writeActions.notice('danger', 'Oops, 文章内容不能为空~')
            return
        }
        writeActions.saveArticle(this.state.title, this.state.content, this.state.contentText)
    }

    render () {
        const {isActive, writeActions} = this.props
        return (
            <div className='text-center col-lg-8 col-lg-offset-2 writer-body'>
                <input type="text" className="content-title" placeholder="请输入文章标题" ref='title' onBlur={this.changeTitle}/>
                <button className="btn btn-warning submit" onClick={this.saveArticle}>提交</button>
                <hr/>
                <div className="writer-content text-center" id="writeContent" ref={'content'} onBlur={this.changeContent}>
                </div>
            </div>
        )
    }

    componentDidMount () {
        $(function () {
            let editor = new wangEditor('writeContent')
            editor.config.uploadImgUrl = '/upload'
            // 配置自定义参数（举例）
            editor.config.uploadParams = {
                token: 'abcdefg',
                user: 'wangfupeng1988'
            }
            // 设置 headers（举例）
            editor.config.uploadHeaders = {
                'Accept' : 'text/x-json'
            }
            editor.create()
        })
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