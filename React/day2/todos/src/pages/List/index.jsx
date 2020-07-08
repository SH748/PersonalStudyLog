import React from 'react'
import Item from '../Item'

import './index.css'
class List extends React.Component {
    /**
     * 问题： 现有的数据： todos [{id,name,isDone}]
     * 通过React实现业务需要的list [<Item></Item>]
     * array.prototype.map
     * [<Item {id:1}></Item>,<Item {id:2}></Item>,<Item {id:3}></Item>] 
     * 
     */
    render() {
        let { todos, handleDoneStoggle, deleteTodo } = this.props
        return (
            <ul className="todo-main">
                {todos.map(todo => {
                    return (<Item todo={todo}  key={todo.id} handleDoneStoggle={handleDoneStoggle} deleteTodo={deleteTodo}></Item>
                    )
                        
                })}
            </ul>
        )
    }
}
export default List