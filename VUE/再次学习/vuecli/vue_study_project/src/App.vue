<template>
  <div id="app">
    <div class="header">
      <router-link to="/pm">PM</router-link>
      <br>
        <router-link to="/abc">abc</router-link>
    </div>
    <div class="main-container">
      <div class="slide-router">
        <slide-router />
        
      </div>
      <div class="content">
        <router-view></router-view> 
      </div>
    </div>
  </div>
</template>

<script>
import slideRouter from '@/components/slide-router'
export default {
  name: 'App',
  components: {
    'slide-router': slideRouter,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  height: 100vh;
  background: #fbfbfb;
  /***头部***/
  .header {
    width: 100%;
    height: 50px;
    background-color: lightsalmon;
  }
  /***主区域***/
  .main-container {
    display: flex;
    overflow: hidden;
    width: 100%;
    height: calc(100vh - 50px);
    /***侧边导航***/
    .slide-router {
      margin-right: 1%;
      width: 12%;
      height: 100%;
      background-color: #fff;
    }
    /***内容显示区域 ***/
    .content{
      width: 87%;
      height: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
      background-color: #fff;
    }
  }
}
</style>