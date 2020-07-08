import React from 'react'

import Head from './Head'
import List from './List'
import Foot from './Foot'

import './index.css'
class Todos extends React.Component {
    render() {
        let {todos,handleDoneStoggle,addTodo,deleteTodo,footnum} = this.props
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Head addTodo={addTodo}></Head>
                    <List todos={todos} handleDoneStoggle={handleDoneStoggle} deleteTodo={deleteTodo}/>
                    <Foot footnum={footnum} />
                </div>
            </div>
        )
    }
}

export default Todos