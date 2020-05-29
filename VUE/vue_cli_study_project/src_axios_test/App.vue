<template>
  <div id="app">
    <!--    -->
    <seachItem style="display:none"/>

  </div>
</template>

<script>
import seachItem from './components/axios/github/seach/seachItem'

export default {
  name: 'App',
  components: {
    seachItem
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
