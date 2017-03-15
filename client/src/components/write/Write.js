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
            title: '',
            content: ''
        }
    }

    changeTitle = (e) => {
        this.setState({
            title: this.refs.title.value
        })
    }

    changeContent = (e) => {
        let string = this.refs.content.innerHTML
        this.setState({
            content: this.refs.content.innerHTML
        })
    }

    toggleI = (e) => {
        e.stopPropagation()
        if (window.getSelection) {
            let selecter = window.getSelection()
            let selectStr = selecter.toString()
            if (selectStr.trim != "") {
                // var rang = selecter.getRangeAt(0)
                if (selecter.focusNode.parentNode.tagName == 'I') {
                    // var docFragment = rang.cloneContents()
                    // var testDiv = document.createElement("div")
                    // testDiv.appendChild(docFragment)
                    // var selectHtml = testDiv.innerHTML.replace(/\<i\>/g,'').replace(/\<\/i\>/g,'')
                    // window.getSelection().createRange().pasteHTML('<i>' + selectStr + '</i>')
                    document.execCommand('InsertHtml','', selectStr)
                } else {
                    document.execCommand('InsertHtml','', '<i>' + selectStr + '</i>')
                    // var rang = selecter.getRangeAt(0)
                    // var temp = $('<i>' + selectStr + '</i>')
                    // rang.surroundContents(temp[0])
                }

            }
        } else if (document.selection) {
            let selecter = document.selection.createRange()
            selecter.select()
            let selectStr = selecter.text//ie
            if (document.selection.focusNode.parentNode.tagName == 'I') {
                selecter.pasteHTML(selectStr)
            } else {
                selecter.pasteHTML('<i>' + selectStr + '</i>')
            }
        }
    }

    saveArticle = () => {
        const {writeActions} = this.props
        if (!this.state.title || !this.state.content) {
            writeActions.notice('danger', 'Oops, 文章内容不能为空~')
            return
        }
        writeActions.saveArticle(this.state.title, this.state.content)
    }

    render () {
        const {isActive, writeActions} = this.props
        return (
            <div className='text-center col-lg-8 col-lg-offset-2 writer-body'>
                <div className="writer-options text-left">
                    <button className="btn btn-default option-btn">加粗</button>
                    <button className="btn btn-default option-btn" onClick={this.toggleI}>倾斜</button>
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