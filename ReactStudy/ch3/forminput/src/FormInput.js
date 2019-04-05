import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class FormInput extends Component {
    constructor (props) {
        super(props)
        const v = this.props.value
        this.state = {
            value: v,
            isOK: this.checkValue(v)
        }
    }

    checkValue (s) {
        if (this.props.pattern === null) {
            return true
        }
    }
}