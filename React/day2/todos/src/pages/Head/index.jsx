import React from 'react'


import './index.css'
class Head extends React.Component {
    state = {
        value: ''
    }
    handleValueChange = e => {
        this.setState({
            value: e.target.value.trim()
        })
    }
    addTodo = e => {
        if (e.keyCode === 13 && this.state.value) {
            this.props.addTodo({
                id: Date.now(),
                name: this.state.value,
                isDone: false
            })
            this.setState({
                value: ''
            })
        }
    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" value={this.state.value} onChange={this.handleValueChange} onKeyUp={this.addTodo} />
            </div>
        )
    }
}

export default Head