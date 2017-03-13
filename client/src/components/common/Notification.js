import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as commonActions from '../../actions/common/common'
import cs from 'classnames'

import '../../styles/common.scss'
class Notification extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentWillReceiveProps(nextProps) {
        const {commonActions} = this.props
        if (nextProps.noticeIsActive) {
            setTimeout(() => {
                commonActions.hideNotice()
            }, 3000)
        }
    }

    render() {
        const {notificationType, noticeIsActive, noticeContent} = this.props
        console.log (notificationType, noticeIsActive, noticeContent)
        let type = 'alert alert-' + notificationType
        return (
            <div className={cs(type,{'alert-animation': noticeIsActive})} role="role" ref="notification">{noticeContent}</div>
        )
    }
}

Notification.propTypes = {
    noticeIsActive: PropTypes.bool.isRequired,
    notificationType: PropTypes.string.isRequired,
    noticeContent:  PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
    noticeIsActive: state.common.common.noticeIsActive,
    notificationType: state.common.common.notificationType,
    noticeContent: state.common.common.noticeContent
})

const mapDispatchToProps = (dispatch) => ({
    commonActions: bindActionCreators(commonActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification)

