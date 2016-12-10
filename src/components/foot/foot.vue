<template>
  <div class="foot">
    <div class="foot-box border-1px">
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
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .foot
    position:fixed
    bottom:0
    left:0
    .foot-box
      border-1px(rgba(7,17,27,0.1))
      display:flex
      line-height:40px
      width:100%
      height: 40px
      font-size: 14px
      .home,.store,.news,.mine
        flex:1
        text-align:center
        & > a
          display:block
          &.active
            color:rgb(240,20,20)
</style>
