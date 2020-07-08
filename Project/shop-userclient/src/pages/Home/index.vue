<template>
  <div>
    <!-- 商品分类导航 -->
    <TopNav />
    <!--列表-->
    <List/>
    <!--今日推荐-->
    <TodayRecommend />
    <!-- 商品排行 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!--楼层-->
    <Floor v-for="item in floors" :floor="item" :key="item.id" />
    <!--商标-->
    <Brand />
  </div>
</template>
<script>
import TopNav from "@/components/topNav";
import Brand from "@/components/Home/brand";
import List from "@/components/Home/list";
import Like from "@/components/Home/like";
import TodayRecommend from "@/components/Home/todayRecommend";
import Floor from "@/components/Home/floor";
import Rank from "@/components/Home/rank";
// import Sort from "@/components/Home/sort";

import {mapState} from 'vuex'
export default {
  name: "Home",
  mounted(){
    this.$store.dispatch("getFloors");
  },
  computed:{
    ...mapState({
      floors:state=>state.Home.floors
    })
  },
  components: {
    TopNav,
    List,
    // Sort
    Brand,
    Like,
    TodayRecommend,
    Rank,
    Floor
  }
};
</script>
<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;
  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;
  }
}
</style>