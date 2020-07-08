import React from 'react'
import PropTypes from 'prop-types'

import './index.css'
class Item extends React.Component {
    state = {
        show: "none"
    }
    static propTypes={
        todo:PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            isDone:PropTypes.bool.isRequired
        })
    }
    handleButtonStoggle = state => () => {
        this.setState({
            show: state
        })
    }
    handleDoneChange=id=>()=>{
       this.props.handleDoneStoggle(id)
    }
    delete=todo=>()=>{
        if(todo.isDone){
            this.props.deleteTodo(todo.id)
        }
    }
    render() {
        let { todo } = this.props
        return (
            <li 
            onMouseEnter={this.handleButtonStoggle("block")}
            onMouseLeave={this.handleButtonStoggle("none")}
            >
                <label>
                    <input type="checkbox" checked={todo.isDone} onChange={this.handleDoneChange(todo.id)}/>
                    <span>{todo.name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: this.state.show }} onClick={this.delete(todo)}>删除
                    </button>
            </li>
        )
    }
}
export default Item