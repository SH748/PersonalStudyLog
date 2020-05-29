<template>
    <div>
        <h2 v-if="first">请输入...</h2>
        <h2 v-else-if="loading">搜索中...</h2>
        <h2 v-else-if="errorMsg">错误...</h2>
        <div v-else>
            <ul>
                <li v-for="(item,index) in users" :key="index">
                    <a :href="item.html_url">
                        <img :src="item.avatar_url" alt="" style="width:100px">
                    </a>
                    <p>{{item.login}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'seachResultShow',
  data () {
    return {
      first: true,
      loading: false,
      errorMsg: false,
      users: []
    }
  },
  mounted () {
    this.$bus.$on('seachRequest', async (keyword) => {
      const url = `https://api.github.com/search/users`
      this.first = false
      this.loading = true
      console.log(keyword)
      try {
        const response = await axios.get(url, {
          params: {
            q: keyword
          }
        })

        const users = response.data.items.map(user => ({
          login: user.login,
          html_url: user.html_url,
          avatar_url: user.avatar_url
        }))

        this.loading = false
        this.users = users
        console.log(this.users)
      } catch (e) {
        this.loading = false
        this.errorMsg = true
      }
    })
  }
}
</script>
<style scoped>
div>ul>li{
    float: left;
    width:100px;
    list-style: none;
    margin-left: 10px;
}
div>ul{
    width: 100%;
    margin: 0;
    padding: 0;
}
div>ul::after{
    content:'';
    display:  block;
    height: 0;
    clear: both;
}
</style>
