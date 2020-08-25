<template>
      <ul class="todo-main">
        <tditem :todos="todos"  :toggle="toggle" :delTodo="delTodo"></tditem>
      </ul>
</template>
<script>
import tditem from './item'
export default {
  name: 'tlist',
  components: {
    tditem
  },
  props: {
    todos: {
      type: Array
    },
    toggle: {
      type: Function
    },
    delTodo: {
      type: Function
    }
  }
}
</script>
<style scoped>
    /*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
