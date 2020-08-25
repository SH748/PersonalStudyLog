<template>
    <div id="box1">
      <todosHead :addTodos="addTodos"></todosHead>
      <todosList :todos="todos" :delTodo="delTodo" :toggleDone="toggleDone"></todosList>
      <todosFoot :todos="todos" :toggleAll="toggleAll"></todosFoot>
    </div>
</template>

<script>
import todosHead from './todosHead'
import todosList from './todosList'
import todosFoot from './todosFoot'
export default {
  name: 'box1',
  components: {
    todosHead,
    todosList,
    todosFoot
  },
  data () {
    return {
      todos: [
        {id: 1, content: 'planA', isDone: false},
        {id: 2, content: 'planB', isDone: true},
        {id: 3, content: 'planC', isDone: false},
        {id: 4, content: 'planD', isDone: true},
        {id: 5, content: 'planE', isDone: false}
      ]
    }
  },
  methods: {
    addTodos (content) {
      this.todos.unshift({id: Date.now(), content, isDone: false})
    },
    delTodo (index) {
      if (this.todos[index].isDone) {
        this.todos.splice(index, 1)
      } else {
        alert('未完成的任务，不能删除')
      }
    },
    toggleDone (index) {
      this.todos[index].isDone = !this.todos[index].isDone
    },
    toggleAll (bo) {
      this.todos.forEach(item => {
        item.isDone = bo
      })
    }
  }

}
</script>

<style>
    #box1{
        width: 100%;
    }
</style>
