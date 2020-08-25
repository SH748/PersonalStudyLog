<template>
  <div>
    <li v-for="(item,index) in todos" :key="item.id">
    <label>
      <input type="checkbox" v-model="todos[index].isDone"/>
      <span>{{item.content}}</span>
    </label>
    <button class="btn btn-danger" v-show="isHover">删除</button>
  </li>
  </div>
</template>
<script>
export default {
  name: 'item',
  props: {
    todos: Array
  },
  data () {
    return {
      isHover: false
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
