<template>
  <ul class="list-group">
    <li>news001</li>
    <li>news002</li>
    <li>news003</li>
  </ul>
</template>
<script>
export default {
  name: 'News',
  mounted () {
    console.log('this')
  }
}
</script>
<style scoped>
li{
    list-style: none;
}
</style>
