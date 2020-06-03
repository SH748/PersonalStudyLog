<template>
  <div id="app">
    <div class="first">
      <fieldset>
        <legend>router基础测试</legend>
        <router-link to="/head">点击进入head</router-link>
        <router-view name='routerhead'></router-view>
      </fieldset>
    </div>
    <showBox />
    <div></div>
  </div>
</template>

<script>
import showBox from './components/anli/showBox'
export default {
  name: 'App',
  components: {
    showBox
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app .first {
  font-size: 14px;
}
</style>
