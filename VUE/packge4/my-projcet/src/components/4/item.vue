<template>
    <div>
       <li v-for="(item,index) in todos" :key="item.id" @mouseenter="enter(index)" @mouseleave="leave">
          <label>
            <input type="checkbox" @click="toggle(index)" :checked="item.isDone?'checked':''"/>
            <span>{{item.content}}</span>
          </label>
          <button class="btn btn-danger" v-show="hoverID === index" @click="del(index)">删除</button>
        </li>
    </div>
</template>
<script>
export default {
  name: 'titem',
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
  },
  data () {
    return {
      hoverID: null,
      isHover: false
    }
  },
  methods: {
    enter (index) {
      this.hoverID = index
      // this.isHover = true
    },
    leave () {
      // this.isHover = false
      this.hoverID = null
    },
    del (index) {
      if (this.todos[index].isDone) {
        console.log(this.todos[index])
        this.delTodo(index)
      }
    }
  }
}
</script>
<style scoped>
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
