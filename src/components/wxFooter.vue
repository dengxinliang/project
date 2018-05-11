<template>
  <div class="footer">
      <tabbar slot="bottom" v-model="selected">
          <tabbar-item link="/">
            <img slot="icon" src="@/assets/index.png" alt="">
            <img slot="icon-active" src="@/assets/index1.png" alt="">
            <span slot="label">首页</span>
          </tabbar-item>
          <tabbar-item link="/views/classify">
            <img slot="icon" src="@/assets/classify.png" alt="">
            <img slot="icon-active" src="@/assets/classify1.png" alt="">
            <span slot="label">分类</span>
          </tabbar-item>
          <tabbar-item link="/views/cooperate">
            <img slot="icon" src="@/assets/cooperate.png" alt="">
            <img slot="icon-active" src="@/assets/cooperate1.png" alt="">
            <span slot="label">合作</span>
          </tabbar-item>
          <tabbar-item link="/views/my">
            <img slot="icon" src="@/assets/my.png" alt="">
            <img slot="icon-active" src="@/assets/my1.png" alt="">
            <span slot="label">我的</span>
          </tabbar-item>
      </tabbar>
  </div>
</template>

<script>
import {
    Tabbar,
    TabbarItem
} from 'vux'
export default {
  components: { 
      Tabbar,
      TabbarItem
  },
  props: ['selected']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.footer{
  width: 100%;
  position: fixed;
  bottom: 0;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}
.weui-tabbar__icon{
  height: auto !important;
}
</style>
