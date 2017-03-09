import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import cs from 'classnames'

class CInput extends Component
{
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <div>
                <input type='text' className="form-group" value={}/>
            </div>
        )
    }
}

export default CInput