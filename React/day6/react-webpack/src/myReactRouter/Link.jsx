import React, { Component } from 'react'
import PropTypes from 'prop-types'
import context from './context'
export class Link extends Component {
    state = {
        data: {}
    }
    static contextType = context
    handleClick = e => {
        e.preventDefault()
        // this.props.to instanceof string ? this.context.history.push(this.props.to) :this.context.history.push(this.props.to.path)
        this.context.push(this.props.to)
    }
    static propTypes = {
        // to: PropTypes.oneOfType(
        //     [
        //         PropTypes.string,
        //         PropTypes.shape({
        //             path: PropTypes.string.isRequired,
        //             search: PropTypes.string,
        //             hash: PropTypes.string,
        //             state: PropTypes.shape({})
        //         })
        //     ]
        // )
        to:PropTypes.string

    }
    render() {
        console.log("Link 渲染");
        return (
            <a onClick={this.handleClick}>
                {this.props.children}
            </a>
        )
    }
}

export default Link
