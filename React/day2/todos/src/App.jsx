import React from 'react'

import Todos from './pages'

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        name: 'AAA',
        isDone: false
      },
      {
        id: 2,
        name: 'BBB',
        isDone: false
      },
      {
        id: 3,
        name: 'CCC',
        isDone: true
      }

    ]
  }
  handleDoneStoggle = id => {
    this.setState((state) => {
      let newTodos = state.todos.map(todo => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone
        }
        return todo
      })
      return {
        todos: newTodos
      }
    })
  }
  addTodo = todo => {
    let arr = [...this.state.todos]
    arr.unshift(todo)
    this.setState({
      todos: arr
    })
  }
  deleteTodo = id => {
    this.setState((state) => {
      // let newTodos = state.todos.filter(todo => {
      //   if (todo.id != id || !todo.isDone) {
      //     return todo
      //   }
      // })
      let newTodos = state.todos.filter(todo => {
        return (todo.id !== id)
      })
      return {
        todos: newTodos
      }
    })
  }
  allOrNot=(flag)=>{
    this.setState({
      todos:this.state.todos.map(todo=>{
        todo.isDone = !flag
        return todo
      })
    })
  }
  delAllDone=()=>{
    this.setState({
      todos:this.state.todos.filter(todo=>{
        return !todo.isDone
      })
    })
  }
  render() {
    let all = this.state.todos.length, 
    checked = this.state.todos.reduce((acc, cur) => {
      return acc + (cur.isDone ? 1 : 0)
    }, 0)
    return (
      <div>
        <h1>Todos</h1>
        <Todos
          todos={this.state.todos}
          handleDoneStoggle={this.handleDoneStoggle}
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
          footnum = {{all,checked,allOrNot:this.allOrNot,delAllDone:this.delAllDone}}
        />
      </div>
    )
  }
}

export default App
