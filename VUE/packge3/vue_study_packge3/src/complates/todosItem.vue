<template>
    <div>
        <li v-for="(item,index) in todos" @mouseenter="enter" @mouseleave="lave" :key="item.id" :index="index">
          <label>
            <input type="checkbox" :checked="item.isDone?'checked':''"/>
            <span>{{item.content}}</span>
          </label>
          <button class="btn btn-danger" v-show="istrue">删除</button>
        </li>

    </div>
</template>
<script>
export default {
  name: 'todosItem',
  data () {
    return {
      style1: '',
      istrue: false
    }
  },
  methods: {
    enter () {
      this.style1 = '#eee'
      this.istrue = true
    },
    lave () {
      this.style1 = ''
      this.istrue = false
    }
  }
}
</script>
