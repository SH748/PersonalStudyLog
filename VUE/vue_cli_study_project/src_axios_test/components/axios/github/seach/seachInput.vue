<template>
    <input type="text" v-model="keyword" placeholder="  请输入要查询的用户昵称" @keyup.13="seach">
</template>
<script>
export default {
  name: 'seachInput',
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    seach () {
      this.$bus.$emit('seachRequest', this.keyword)
      this.keyword = ''
    }
  }
}
</script>
<style scoped>
    input{
        width: 80%;
        margin: 10px auto;
        border: 1px solid #000;
        border-radius: 15px;
        outline: none;
        padding-left: 10px;
    }
</style>
