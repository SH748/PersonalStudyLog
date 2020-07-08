import React, { Component } from 'react'
export class Count extends Component {

    plus = () => {
        this.props.addAction(2)
    }
    less = () => {
        this.props.lessAction(2)
    }
    plusAsync = () => {
        this.props.addActionAsync(2)
    }
    //addActionAsync,lessActionAsync
    lessAsycn = () => {
        this.props.lessActionAsync(2)
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <div>{this.props.count}</div>
                <button onClick={this.plus}>+</button>
                <button onClick={this.plusAsync}>+async</button>
                <button onClick={this.less}>-</button>
                <button onClick={this.lessAsycn}>-async</button>
            </div>
        )
    }
}

export default Count
