<template>
  <div class="foot">
    <div class="home">
      <a v-link="{path:'/home'}">首页</a>
    </div>
    <div class="store">
      <a v-link="{path:'/store'}">门店</a>
    </div>
    <div class="news">
      <a v-link="{path:'/news'}">新闻</a>
    </div>
    <div class="mine">
      <a v-link="{path:'/mine'}">我的</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .foot
    display:flex
    position:fixed
    bottom:0
    left:0
    width:100%
    line-height:40px
    height: 40px
    font-size: 14px
    .home,.store,.news,.mine
      flex:1
      text-align:center
</style>
