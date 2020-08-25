<template>
    <div>
         <ul class="todo-main">
        <li v-for="(item,index) in todos" @mouseenter="enter(index)" @mouseleave="leave()" :style="{'backgroundColor':(index===isHover?bckColor:'')}"  :key="item.id">
          <label>
            <input type="checkbox" :checked="item.isDone?'checked':''" @click="toggleDone(index)"/>
            <span>{{item.content}}</span>
          </label>
          <button class="btn btn-danger" v-show="index===isHover" @click="del(index)">删除</button>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  name: 'todolist',
  props: {
    todos: {
      type: Array
    },
    delTodo: {
      type: Function,
      required: true
    },
    toggleDone: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      bckColor: '#bdbdbd',
      isHover: null
    }
  },
  methods: {
    enter (index) {
      this.isHover = index
    },
    leave () {
      this.isHover = null
    },
    del (index) {
      this.delTodo(index)
    }
  }
}
</script>
<style  scoped>
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
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
</style>
