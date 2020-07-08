<template>
  <div class="swiper-container" id="mySwiper" ref="sw">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="li in list" :key="li.id">
        <img :src="li.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  name: 'mySwiper',
  props: {
    list: Array
  },
  watch: {
    banners: {
      immediate: true, //开始监听，并在开始时立即执行一次
      // console.log(val)
      handler() {
        this.$nextTick(() => {
          //console.log('1')
          // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新
          var mySwiper = new Swiper(this.$refs.sw, {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination'
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          })
        })
      }
    }
  }
}
</script>
<style scoped>
</style>