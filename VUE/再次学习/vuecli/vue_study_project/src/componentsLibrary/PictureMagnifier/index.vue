<template>
  <div class="picture-magnifier">
    <!-- 原始 -->
    <div
      class="initial"
      ref="initial"
      @mouseenter="enlargeShow=true"
      @mouseleave="enlargeShow=false"
      @mousemove="handleMouseMove($event)"
    >
      <img :src="picture" alt srcset />
      <div class="selector" ref="selector"></div>
      <div class="mark"></div>
    </div>
    <!-- 放大 -->
    <div class="enlarge">
      <img :src="picture" ref="enlarge" alt srcset />
    </div>
  </div>
</template>
<script>
export default {
  name: 'PictureMagnifier',
  data() {
    return {
    }
  },
  props: {
    picture: {
      // 显示图片
      type: String,
      required: true,
    },
    enlargePositionTop: {
      //放大镜区域位置-上
      type: Number,
      default: 0,
    },
    enlargePositionLeft: {
      //放大镜区域位置-左
      type: Number,
      default: 120,
    },
    gain: {
      //放大倍数
      type: Number,
      default: 2,
    },
  },
  components: {},
  computed: {
    enlarge() {
      return this.$refs.enlarge
    },
    selector() {
      return this.$refs.selector
    },
    initial() {
      return this.$refs.initial
    },
  },
  beforeMount() {},
  mounted() {
    this.enlarge.parentElement.style.top = this.enlargePositionTop + '%'
    this.enlarge.parentElement.style.left = this.enlargePositionLeft + '%'
    
    this.enlarge.style.width = this.gain * 100 + '%'
    this.enlarge.style.height = this.gain * 100 + '%'
    this.selector.style.width = (1 / this.gain) * 100 + '%'
    this.selector.style.height = (1 / this.gain) * 100 + '%'
  },
  methods: {
    moveEnlarge(centerX, centerY) {
      this.enlarge.style.left = centerX * -1 * this.gain + 'px'
      this.enlarge.style.top = centerY * -1 * this.gain + 'px'
    },
    handleMouseMove(e) {
      this.moveSelector(e.offsetX, e.offsetY)
    },
    moveSelector(centerX, centerY) {
      let width = this.selector.clientWidth
      let heigth = this.selector.clientHeight
      let resultX =
        centerX - width / this.gain > 0
          ? centerX - width / this.gain > this.initial.clientWidth - width
            ? this.initial.clientWidth - width
            : centerX - width / this.gain
          : 0
      let resultY =
        centerY - heigth / this.gain > 0
          ? centerY - heigth / this.gain > this.initial.clientHeight - heigth
            ? this.initial.clientHeight - heigth
            : centerY - heigth / this.gain
          : 0
      this.moveEnlarge(resultX, resultY)
      this.selector.style.left = resultX + 'px'
      this.selector.style.top = resultY + 'px'
    },
  },
  watch: {},
}
</script>
<style lang="less" scoped>
.picture-magnifier {
  position: relative;
  width: 100%;
  height: 100%;
  &:hover {
    .initial .selector {
      display: block;
    }
    .enlarge {
      display: block;
    }
  }
  .initial {
    position: relative;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
    .selector {
      display: none;
      position: absolute;
      // width: 50%;
      // height: 50%;
      background: rgba(200, 200, 200, 0.4);
      top: 0;
      left: 0;
    }
    .mark {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 2;
    }
  }
  .enlarge {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    // top: 0;
    // left: 120%;
    img {
      position: absolute;
      // width: 200%;
      // height: 200%;
    }
  }
}
</style>
