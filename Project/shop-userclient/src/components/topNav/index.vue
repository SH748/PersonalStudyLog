<template>
  <div class="type-nav">
    <div class="container">
      <h2 class="all" @mouseenter="showSort" @mouseleave="hiddenSort">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <div
        class="sort"
        v-if="isShowSort"
        @mouseenter="showSort"
        @mouseleave="hiddenSort"
        @click.prevent="toSearch($event)"
      >
        <div class="all-sort-list2">
          <div class="item" v-for="(c1) in baseCategoryList" :key="c1.categoryId">
            <h3>
              <a href :data-category1Id="c1.categoryId"  :data-categoryName="c1.categoryName">{{c1.categoryName}}</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore" v-for="(c2) in c1.categoryChild" :key="c2.categoryId">
                  <dt>
                    <a href :data-category2Id="c2.categoryId" :data-categoryName="c2.categoryName">{{c2.categoryName}}</a>
                  </dt>
                  <dd>
                    <em v-for="(c3) in c1.categoryChild" :key="c3.categoryId">
                      <a href :data-category3Id="c3.categoryId" :data-categoryName="c3.categoryName">{{c3.categoryName}}</a>
                    </em>
                    <em>
                      <a href>文学</a>
                    </em>
                    <em>
                      <a href>经管</a>
                    </em>
                    <em>
                      <a href>畅读VIP</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "topNav",
  data() {
    return {
      //sort模块的显示和隐藏
      isShowSort: true
    };
  },
  mounted() {
    this.$store.dispatch("getBaseCategoryList");
    if (this.$route.path !== "/") {
      this.isShowSort = false;
    }
  },
  methods: {
    showSort() {
      this.isShowSort = true;
    },
    hiddenSort() {
      if (this.$route.path !== "/") {
        this.isShowSort = false;
      }
    },
    toSearch(event) {
      let target = event.target;
      let query = {};
      if (target.nodeName === "A") {
        if (target.dataset.category1id) {
          query.category1id = target.dataset.category1id;
        } else if (target.dataset.category2id) {
          query.category2id = target.dataset.category2id;
        } else if (target.dataset.category3id) {
          query.category3id = target.dataset.category3id;
        }
        query.categoryName = target.dataset.categoryname
      }
      this.$router.push({name:'search',query})
    }
  },
  computed: {
    ...mapState({
      baseCategoryList: state => state.Home.baseCategoryList
    })
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
    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }
    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }
    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;
            a {
              color: #333;
            }
          }
          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;
            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;
              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;
                &.fore {
                  border-top: 0;
                }
                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }
                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;
                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
          &:hover {
            background: lightblue;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>