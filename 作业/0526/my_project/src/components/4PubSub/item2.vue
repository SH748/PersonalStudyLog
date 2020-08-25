<template>
    <li @mouseenter="enter(index)" @mouseleave="leave">
    <label>
      <input type="checkbox" v-model="item.isDone"/>
      <span>{{item.content}}</span>
    </label>
    <button class="btn btn-danger" v-show="isHover==index" @click="delTodo(index)">删除</button>
  </li>
</template>
<script>
export default {
  name: 'item',
  // props: ['item', 'index', 'isHover', 'setHover', 'delTodo'],
  props: ['item', 'index', 'isHover', 'setHover'],
  data () {
    return {
    }
  },
  methods: {
    enter (index) {
      this.setHover(index)
    },
    leave () {
      this.setHover(null)
    },
    delTodo (index) {
      // console.log(this.$bus.$emit('todosC') === this.$bus) //emit返回了调用它的vue实例对象，目的：链式操作

      this.$bus.$emit('delTodo', index)
    }
  }
}
</script>
<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
  line-height: 36px;
  vertical-align: middle;
  box-sizing: border-box;
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
  margin-top: 7px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
