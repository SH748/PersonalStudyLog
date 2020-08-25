<template>
    <div id="box2">
      <tdhead :addTod="addTod"></tdhead>
      <tdlist :todos="todos" :toggle="toggle" :delTodo="delTodo"></tdlist>
      <tdfoot :todos="todos"></tdfoot>
    </div>
</template>

<script>
import tdhead from './head'
import tdlist from './list'
import tdfoot from './foot'
export default {
  name: 'box2',
  components: {
    tdhead,
    tdlist,
    tdfoot
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
    addTod (content) {
      this.todos.unshift({id: Date.now(), content, isDone: false})
    },
    toggle (index) {
      this.todos[index].isDone = !this.todos[index].isDone
    },
    delTodo (index) {
      this.todos.splice(index, 1)
    }

  }
}
</script>

<style>
    #box2{
        width: 80%;
        margin:0 auto;
    }
</style>
