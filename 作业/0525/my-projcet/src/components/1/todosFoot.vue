<template>
    <div class="todo-footer">
        <label>
          <input type="checkbox" v-model="checkAll"/>
        </label>
        <span>
          <span>已完成{{coutDone}}</span> / 全部{{todos.length}}
        </span>
        <button class="btn btn-danger">清除已完成任务</button>
      </div>
</template>
<script>
export default {
  name: 'todosFoot',
  props: {
    todos: {
      type: Array
    },
    toggleAll: {
      type: Function
    }
  },
  computed: {
    coutDone () {
      return this.todos.reduce((acc, item) => acc + (item.isDone ? 1 : 0), 0)
    },
    checkAll: {
      get () {
        return this.coutDone === this.todos.length
      },
      set (val) {
        this.toggleAll(val)
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
  margin-right: 20px;
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
