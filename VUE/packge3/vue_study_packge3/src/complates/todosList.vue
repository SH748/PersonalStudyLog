<template>
    <div>
         <ul class="todo-main">
        <li v-for="(item,index) in todos" @mouseenter="enter(index)" @mouseleave="lave" :key="item.id" :index="index">
          <label>
            <input type="checkbox" :checked="item.isDone?'checked':''" @click="toggleTodesDone(index)"/>
            <span>{{item.content}}</span>
          </label>
          <button class="btn btn-danger" v-show="index === istrue" @click="delTode(index)">删除</button>
        </li>
      </ul>
    </div>
</template>
<script>
import PubSub from 'pubsub-js'
export default {
  name: 'todosList',
  props: {
    todos: {
      type: Array
    },
    toggleTodesDone: {
      type: Function
    }
  },
  data () {
    return {
      style1: '',
      istrue: null
    }
  },
  methods: {
    enter (index) {
      this.style1 = '#eee'
      this.istrue = index
    },
    lave () {
      this.style1 = ''
      this.istrue = false
    },
    delTode (index) {
      if (this.todos[index].isDone) {
        PubSub.publish('delindex', index)
      }
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
