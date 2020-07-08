<template>
  <div id="app">
    <ShopHeader></ShopHeader>
    <div>
      <router-view></router-view>
    </div>
    <ShopFooter v-if="!$route.meta.isHiddenFooter"></ShopFooter>
  </div>
</template>

<script>
import ShopHeader from "@/components/Header";
import ShopFooter from "@/components/Footer";
import { reqBaseCategoryList } from "./api";
export default {
  name: "App",
  components: {
    ShopHeader,
    ShopFooter
  },
  async mounted() {
    /* 将相关数据和操作移动至Vuex统一管理 
   const result = await reqBaseCategoryList()
    console.log(result);
    */
    // this.$store.dispatch("getBaseCategoryList");
  }
};
</script>

<style>
</style>
