import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
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

    submitShort () {
        let shortContent = this.refs.textarea.value
        this.props.indexActions.submitShort(shortContent)
    }
    render () {
        const {isActive, indexActions} = this.props
        return (
            <div className={cs({'hidden': !isActive})}>
                <div className="text-center form-group">
                    <div className="col-lg-8 col-lg-offset-2">
                        <textarea className="form-control" rows="8" cols="50" placeholder="请输入想说的内容" ref="textarea"></textarea>
                        <div className="text-center"><button className="btn btn-info" onClick={this.submitShort.bind(this)}>发布</button></div>
                    </div>
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