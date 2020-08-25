<template>
     <ul class="todo-main">
       <!-- <item :todos="todos"></item> -->
       <item2 v-for="(item,index) in todos" :key="item.id" :index="index" :item="item" :isHover="isHover" :setHover="setHover" :delTodo="delTodo"></item2>
      </ul>
</template>
<script>
import item from './item'
import item2 from './item2'
export default {
  name: 'list',
  components: {
    item,
    item2
  },
  props: {
    todos: Array,
    delTodo: Function
  },
  data () {
    return {
      isHover: null
    }
  },
  methods: {
    setHover (index) {
      this.isHover = index
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
