<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="content" @keyup.13="add"/>
      </div>
</template>
<script>
export default {
  name: 'todosHead',
  props: {
    addTodos: {
      type: Function
    }
  },
  data () {
    return {
      content: ''
    }
  },
  methods: {
    add () {
      if (this.content.trim()) {
        this.addTodos(this.content)
      }
    }
  }
}
</script>
<style scoped>
/*header*/
.todo-header input {
  width: 90%;
  height: 28px;
  font-size: 14px;
  margin: 3%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
