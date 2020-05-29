<template>
  <div>
    <!-- app组件
    <hello></hello> -->
    <div class="todo-container">
      <todosHead :addTodo="addTodo"></todosHead>
      <todosList :todos="todos" :toggleTodesDone="toggleTodesDone" :delTode="delTode"></todosList>
      <todosFooter :todos="todos"></todosFooter>
    </div>
  </div>
</template>
<script>
import Hello from './complates/Hello'
import todosHead from './complates/todosHead'
import todosList from './complates/todosList'
import todosFooter from './complates/todosFooter'
import PubSub from 'pubsub-js'
export default {
  name: 'app',
  components: {
    Hello,
    todosHead,
    todosList,
    todosFooter
  },
  data () {
    return {
      // todos: [
      //   {id: 1, content: 'planA', isDone: false},
      //   {id: 2, content: 'planB', isDone: true},
      //   {id: 3, content: 'planC', isDone: false},
      //   {id: 4, content: 'planD', isDone: false},
      //   {id: 5, content: 'planE', isDone: false}
      // ]
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
    addTodo (content) {
      this.todos.unshift({id: Date.now(), content, isDone: false})
    },
    delTode (index) {
      if (this.todos[index].isDone) {
        this.todos.splice(index, 1)
      } else {
        alert('未完成的任务，不能删除')
      }
    },
    toggleTodesDone (index) {
      this.todos[index].isDone = !this.todos[index].isDone
    }
  },
  watch: {
    todos: {
      deep: true,
      handler: function (val) {
        localStorage.setItem('todos', JSON.stringify(val))
      }
    }
  },
  mounted () {
    this.token = PubSub.subscribe('delindex', (msg, index) => {
      console.log(msg, index)
      this.delTode(index)
    })
  }

}
</script>
<style>
  .todo-container {
  width: 600px;
  margin: 0 auto;
}
div .todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}
</style>
