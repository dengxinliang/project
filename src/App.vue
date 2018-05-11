<template>
  <div id="app">
    <router-view v-if="landscapeShow" />
    <wx-landscape v-else></wx-landscape>
  </div>
</template>

<script>
import wxLandscape from '@/components/landscape'
export default {
  name: 'App',
  components: {
    wxLandscape
  },
  data() {
    return {
      landscapeShow: true
    }
  },
  mounted() {
    this.loadscapeFn();
  },
  methods: {
    loadscapeFn() {
      window.addEventListener(
          "onorientationchange" in window ? "orientationchange" : "resize",
          () => {
              if (window.orientation === 90 || window.orientation === -90) {
                  this.landscapeShow = false
              } else {
                  this.landscapeShow = true
              }
          },
          false
      );
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

/*    初始样式   */
html,body,div,p,h1,h2,h3,h4,h5,h6,span,em,a,input,ul,ol,li,dl,dt,dd,img,select,option{
	margin: 0;
	padding: 0;
	border: none;
}

ul,ol,li{
	list-style: none;
}

img{
	width: 100%;
	display: block;
}

a{
	text-decoration: none;
}
</style>
