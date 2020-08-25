<template>
  <!-- <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkall"/>
    </label>
    <span>
      <span>已完成{{countDone}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" @click="delAll">清除已完成任务</button>
  </div> -->
  <div class="todo-footer">
    <slot name="left"></slot>
    <slot name="total"></slot>
    <slot name="right"></slot>
  </div>
</template>
<script>
export default {
  name: 'foot',
  props: {
    todos: Array,
    doneAll: Function,
    delAll: Function
  },
  computed: {
    countDone () {
      return this.todos.reduce((acc, item) => acc + (item.isDone ? 1 : 0), 0)
    },
    checkall: {
      get () {
        return this.countDone === this.todos.length && this.todos.length !== 0
      },
      set (val) {
        this.doneAll(val)
      }
    }
  }

}
</script>
<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 2px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>
