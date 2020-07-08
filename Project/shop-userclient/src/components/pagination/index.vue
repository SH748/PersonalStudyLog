<template>
  <div class="pagination">
    <!--上一页-->
    <button>上一页</button>
    <!-- 第1页 -->
    <button :class="totalPages.activeNo === 1?'active':''">1</button>
    <!-- 省略号 -->
    <button disabled v-if="totalPages.preferenceOmitted">···</button>
    <!-- 连续页码 -->
     <button :class="totalPages.activeNo === item?'active':''" v-for="item in totalPages.list" :key="item">{{item}}</button>
    <button disabled v-if="totalPages.postscript">···</button>
    <!-- 最后一页 -->
    <button :class="totalPages.activeNo === 1?'active':''">1</button>
    <!--下一页-->
    <button>下一页</button>
    <!-- 总记录数 -->
    <button disabled style="margin-left: 30px">共 30 条</button>
  </div>
</template>
<script>
export default {
  name: 'pagination',
  props:{
    "pagination":Object
  },
  computed:{
    totalPages(){
      let result = {
        preferenceOmitted:true,
        postscript:true,
        activeNo:this.pagination.pageNo,
        list:this.forList(this.pagination.pageNo,2)
      }
      return result
    }
  },
  methods:{
    forList(no,step){
      let arr = []
      for(let i = no-step;i++;i<=no+step){
        console.log("i",i);
        arr.push(i)
      }
      // if(no===1){
      //   console.log('1');
      // }else if(no===this.pagination.totalPages){
      //   console.log('2');
      // }else{
      //   console.log('3');
      // }
      console.log(no- step);
      return arr
    }
  }
}
</script>
<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;
    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }
    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>