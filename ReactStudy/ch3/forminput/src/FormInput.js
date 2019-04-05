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
        return this.props.pattern.test(s)
    }

    handleChange (e) {
        const v = e.target.value
        const filter = this.props.filter
        let newValue = v
        if (filter !== null) {
            newValue = newValue.replace(filter, '')
        }
        const newIsOK = this.checkValue(newValue)
        this.setState({
            value: newValue,
            isOK: newIsOK
        })
        if (this.props.onChange) {
            this.props.onChange({
                target: this,
                value: newValue,
                isOK: newIsOK,
                name: this.props.name
            })
        }
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            value: nextProps.value,
            isOK: this.checkValue(nextProps.value)
        })
    }

    render () {
        const msg = this.renderStatusMessage()
        return (<div>
            <label>{this.props.label}: <br />
                <input type='text'
                name={this.props.name}> 
            </label>
        </div>)
    }
}