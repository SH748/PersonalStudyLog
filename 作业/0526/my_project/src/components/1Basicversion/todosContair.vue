<template>
  <div id="box1">
    <div class="todo-container">
      <div class="todo-wrap">
        <todohead :addTodo="addTodo"></todohead>
        <list :todos="todos" :delTodo="delTodo"></list>
        <foot :todos="todos" :doneAll="doneAll" :delAll="delAll" ></foot>
      </div>
    </div>
  </div>
</template>

<script>
import todohead from './head'
import list from './list'
import foot from './foot'
import stroge from '../../utils/loaclStroge.js'

export default {
  name: 'todosContair',
  components: {
    todohead,
    list,
    foot
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
      todos: stroge.get('c1_todosList') || []
    }
  },
  methods: {
    addTodo (content) {
      this.todos.unshift({id: Date.now(), content, isDone: false})
    },
    delTodo (index) {
      if (this.todos[index].isDone) {
        this.todos.splice(index, 1)
      }
    },
    doneAll (bo) {
      this.todos.forEach(item => {
        item.isDone = bo
      })
    },
    delAll () {
      for (let i = this.todos.length - 1; i >= 0; i--) {
        if (this.todos[i].isDone) {
          this.delTodo(i)
        }
      }
    }
  },
  watch: {
    todos: {
      deep: true,
      handler (val) {
        stroge.set('c1_todosList', val)
      }
    }
  }
}
</script>

<style scoped>
/*app*/
.todo-container {
  width: 100%;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
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

</style>
<style>

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
