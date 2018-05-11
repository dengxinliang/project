<template>
  <div class="home">
      <x-header slot="header" :left-options="{showBack: false}">
          <div slot="default">
              <router-link to="">
                  <span>洛川中路840号</span>
                  <em><img src="@/assets/home/down.png" alt=""></em>
              </router-link>
          </div>
          <div slot="right">
              <router-link to=""><img src="@/assets/home/sousuo.png" alt=""></router-link>
          </div>
      </x-header>
      <div class="content">
          <swiper loop auto dots-position="center" :show-desc-mask="false" :list="banners"></swiper>
          <group>
              <cell title="公告">
                  <marquee :interval="5000">
                    <marquee-item v-for="(item, index) in tabs" :key="index" @click.native="onClick(i)">{{item.text}}</marquee-item>
                  </marquee>
              </cell>
          </group>
          <grid :cols="5" :show-vertical-dividers="false">
              <grid-item v-for="(item, index) in navs" :key="index">
                  <img slot="icon" :src="item.img">
                  <span slot="label">{{item.text}}</span>
              </grid-item>
          </grid>
          <div class="list">
              <div class="title">
                  <img src="@/assets/home/tjbg.png" alt="">
                  <span>生鲜推荐</span>
              </div>
              <div class="list-li">
                  <ul>
                      <li v-for="(item, index) in lists" :key="index">
                          <img :src="item.img" alt="">
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <wx-footer :selected="0"></wx-footer>
  </div>
</template>

<script>
import wxFooter from '@/components/wxFooter'
import {
    XHeader,
    Swiper,
    SwiperItem,
    Marquee,
    MarqueeItem,
    Group,
    Cell,
    Grid,
    GridItem
} from 'vux'
export default {
    components: {
        wxFooter,
        XHeader,
        Swiper,
        SwiperItem,
        Marquee,
        MarqueeItem,
        Group,
        Cell,
        Grid,
        GridItem
    },
    data() {
        return {
            banners: [
                {
                    url: 'javascript:',
                    img: require('@/assets/home/banner1.png')
                },
                {
                    url: 'javascript:',
                    img: require('@/assets/home/banner2.png')
                }
            ],
            tabs: [
                {
                    text: 'nihao'
                },
                {
                    text: 'aaaaa'
                },
                {
                    text: 'bbbbb'
                }
            ],
            navs: [
                {
                    img: require('@/assets/home/gn1.png'),
                    text: '会员'
                },
                {
                    img: require('@/assets/home/gn2.png'),
                    text: '开发中'
                },
                {
                    img: require('@/assets/home/gn3.png'),
                    text: '开发中'
                },
                {
                    img: require('@/assets/home/gn4.png'),
                    text: '开发中'
                },
                {
                    img: require('@/assets/home/gn5.png'),
                    text: '开发中'
                },
                {
                    img: require('@/assets/home/gn6.png'),
                    text: '开发中'
                },
                {
                    img: require('@/assets/home/gn7.png'),
                    text: '开发中'
                },
                {
                    img: require('@/assets/home/gn8.png'),
                    text: '开发中'
                },
                {
                    img: require('@/assets/home/gn9.png'),
                    text: '开发中'
                },
                {
                    img: require('@/assets/home/gn10.png'),
                    text: '开发中'
                }
            ],
            lists: [
                {
                    img: require('@/assets/home/list.png')
                },
                {
                    img: require('@/assets/home/list.png')
                },
                {
                    img: require('@/assets/home/list.png')
                }
            ]
        }
    }
}
</script>

<style>
.home .vux-header{
    width: 100%;
    position: fixed !important;
    left: 0;
    top: 0;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    z-index: 9;
}
.home .vux-header-title a{
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}
.home .vux-header-title em{
    width: 18px;
    margin-left: 10px;
}
.home .vux-header-right a{
    width: 22px;
}
.home .content{
    padding: 46px 0 53px;
}
.home .weui-cells{
    margin-top: 0 !important;
}
.home .weui-cell__ft{
    width: 86%;
    text-align: center !important;
}
.home .weui-grids{
    margin: 10px auto;
}
.home .weui-grids:before{
    border-top: none !important;
}
.home .weui-grid:after{
    border-bottom: none !important;
}
.home .weui-grid{
    padding: 10px !important;
}
.home .title{
    width: 310px;
    position: relative;
    margin: 0 auto;
}
.home .title span{
    position: absolute;
    left: 0;
    right: 0;
    top: 6px;
    margin: auto;
    text-align: center;
    color: #ffffff;
    font-size: 16px;
}
.home .list-li li{
    width: 343px;
    border: 2px solid #00b090;
    border-radius: 8px;
    padding: 6px;
    margin: 10px auto;
}
</style>
