<template>
  <div class="classify">
      <div class="classifyBox">
          <div class="classsifyNav">
              <scroller>
                  <ul>
                      <li v-for="(item, index) in navs" :key="index" :class="{active: active==index}" @click="classsifyNav(index)">{{item}}</li>
                  </ul>
                  <div class="hr"></div>
              </scroller>
          </div>
          <div class="classsifyList">
              <scroller
                  :on-refresh="refresh"
                  :on-infinite="infinite"
                  ref="scroll"
              >
                  <div class="classsifyListDl">
                      <dl v-for="(item, index) in items" :key="index">
                          <dt><img :src="item.img" alt=""></dt>
                          <dd>{{item.name}}</dd>
                      </dl>
                  </div>
              </scroller>
              <div class="hr"></div>
          </div>
      </div>
      <wx-footer :selected="1"></wx-footer>
  </div>
</template>

<script>
import wxFooter from '@/components/wxFooter'
import {
} from 'vux'
export default {
    components: {
        wxFooter
    },
    data() {
        return {
            items: [
                {
                    img: require('@/assets/classify/img1.png'),
                    name: '三文鱼'
                },
                {
                    img: require('@/assets/classify/img1.png'),
                    name: '三文鱼'
                },
                {
                    img: require('@/assets/classify/img1.png'),
                    name: '三文鱼'
                },
                {
                    img: require('@/assets/classify/img1.png'),
                    name: '三文鱼'
                },
                {
                    img: require('@/assets/classify/img1.png'),
                    name: '三文鱼'
                },
                {
                    img: require('@/assets/classify/img1.png'),
                    name: '三文鱼'
                }
            ],
            initLoader: true,
            active: 0,
            navs: ['菜园推荐', '全部分类', '新鲜肉类', '美味果蔬', '澳洲海鲜', '肉禽鸡蛋', '乳品烘焙']
        }
    },
    mounted() {
    },
    methods: {
        refresh() {
            this.$refs.scroll.finishPullToRefresh();
        },
        infinite() {
            if(!this.initLoader){
                this.$refs.scroll.finishInfinite();
                return;
            };
            this.$refs.scroll.finishInfinite();
        },
        classsifyNav(index){
            this.active = index;
        }
    }
}
</script>

<style>
html, body, #app, .classify, .classifyBox{
    height: 100%;
}
.classifyBox{
    display: flex;
    display: -webkit-flex;
    justify-content: flex-end;
    position: relative;
}
.hr{
    height: 48px;
}
.classsifyNav{
    width: 1.72rem;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
}
.classsifyNav li{
    width: 1.64rem;
    height: 1rem;
    background: #f7f7fa;
    border-left: .08rem solid #f7f7fa;
    font-size: .28rem;
    color: #525252;
    text-align: center;
    line-height: 1rem;
}
.classsifyNav li.active{
    background: #ffffff;
    border-left: .08rem solid #65cbc1;
    color: #65cbc1;
}
.classsifyList{
    width: 5.78rem;
    position: relative;
}
.classsifyListDl{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.classsifyListDl dl{
    width: 30%;
    margin: .2rem 0;
}
.classsifyListDl dt{
    width: .93rem;
    height: .97rem;
    margin: 0 auto;
}
.classsifyListDl dd{
    font-size: .24rem;
    color: #525252;
    text-align: center;
    margin-top: .2rem;
}
</style>
