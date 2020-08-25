<template>
  <div class="container">
    <h2>PictureMagnifier</h2>
    <hr />
    <div style="width:300px;border:1px solid black">
      <PictureMagnifier
        :picture="'https://t9.baidu.com/it/u=1307125826,3433407105&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1598236380&t=9dcc91c3f3f540ed7ba47d0ec7e31b08'"
        :gain=1.5
      />
    </div>
  </div>
</template>
<script>
import PictureMagnifier from '@/componentsLibrary/PictureMagnifier'
export default {
  name: '',
  data() {
    return {
      pmOtions: {
        enlargePosition: {
          top: 100,
          left: 100,
        },
      },
    }
  },
  components: {
    PictureMagnifier,
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {},
  watch: {},
}
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 0 10px;
  position: relative;
  h2 {
    display: block;
  }
}
</style>
