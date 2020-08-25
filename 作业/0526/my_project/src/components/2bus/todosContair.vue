<template>
  <div id="box1">
    <div class="todo-container">
      <div class="todo-wrap">
        <todohead :addTodo="addTodo"></todohead>
        <!-- <list :todos="todos" :delTodo="delTodo"></list> -->
        <list :todos="todos"></list>
        <foot :todos="todos" :doneAll="doneAll" :delAll="delAll" ></foot>
      </div>
    </div>
  </div>
</template>

<script>
import todohead from './head'
import list from './list'
import foot from './foot'
import stroge from '../../utils/loaclStroge.js'

/**
* deltodo传递了两层，改用$bus总线来传送，优化：减少一次传递过程
*/

export default {
  name: 'todosContair',
  components: {
    todohead,
    list,
    foot
  },
  data () {
    return {
      // todos: [
      //   {id: 1, content: 'planA', isDone: false},
      //   {id: 2, content: 'planB', isDone: true},
      //   {id: 3, content: 'planC', isDone: false},
      //   {id: 4, content: 'planD', isDone: false},
      //   {id: 5, content: 'planE', isDone: false}
      // ]
      todos: stroge.get('c2_todosList') || []
    }
  },
  mounted () {
    /**
     * 页面第一次渲染完成之后执行
     */
    this.$bus.$on('delTodo', (index) => { // 使用箭头函数而不是funtion声明式函数，箭头函数的this是mounted中的this，指向的是当前模板对象实例！！！！！！！！
      if (this.todos[index].isDone) {
        this.todos.splice(index, 1)
      }
    })
    let that = this
    this.$bus.$on('todosC', () => {
      return that
    })
  },
  beforeDestroy () {
    this.$bus.$off() // 清除所有绑定消息
  },
  methods: {
    addTodo (content) {
      this.todos.unshift({id: Date.now(), content, isDone: false})
    },
    // delTodo (index) {
    //   if (this.todos[index].isDone) {
    //     this.todos.splice(index, 1)
    //   }
    // },
    doneAll (bo) {
      this.todos.forEach(item => {
        item.isDone = bo
      })
    },
    delAll () {
      for (let i = this.todos.length - 1; i >= 0; i--) {
        if (this.todos[i].isDone) {
          this.delTodo(i)
        }
      }
    }
  },
  watch: {
    todos: {
      deep: true,
      handler (val) {
        stroge.set('c2_todosList', val)
      }
    }
  }
}
</script>

<style scoped>
/*app*/
.todo-container {
  width: 100%;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

</style>
<style>

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}
</style>
