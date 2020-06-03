<template>
  <div id="app">
    <h2>App</h2>
    <hr/>
    <router-link to="/Home">Home</router-link>
    <router-link to="/About">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style lang="stylus" scoped>
  #app{
    h2{
      font-family '华文新魏'
    }
  }
</style>
