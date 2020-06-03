<template>
  <div>
    <h4>Home</h4>
    <ul class="nav nav-tabs">
      <li>
        <router-link to="/home/news">News</router-link>
      </li>
      <li>
        <router-link to="/home/message" >Message</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Home',
  mounted () {
    console.log('Home 加载完毕')
  }
}
</script>
<style scoped>
</style>
