<template>
  <div id="app">
    <p>数据：{{count}}，奇偶性：{{oddOrEven}}{{count1}}</p>
    <button @click="add">+</button>
    <button @click="reduc">-</button>
    <button @click="odd_reduc">odd-</button>
    <button @click="reducAsycn">acsyn-</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'App',
  components: {
  },
  mounted () {
    // this.$store.commit('add')
  },
  methods: {
    add () {
      this.$store.commit('add')
    },
    reduc () {
      this.$store.commit('reduc')
    },
    odd_reduc () {
      this.$store.dispatch('odd_reduc_action')
    },
    reducAsycn () {
      console.log('222')
      this.$store.dispatch('reduce_asyc_action')
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    },
    oddOrEven () {
      return this.$store.getters.word_OddOrEven_getter
    },
    count1 () {
      console.log(mapState(['count']))
      return 1
    }
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

</style>
