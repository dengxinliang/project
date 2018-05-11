<template>
  <div class="my">
      <section class="my-header">
          <flexbox class="my-xinxi">
            <flexbox-item></flexbox-item>
            <flexbox-item :span="9">
                <flexbox>
                    <flexbox-item :span="3"><img :src="$store.state.myXinxi.portrait" alt=""></flexbox-item>
                    <flexbox-item>
                        <p>{{$store.state.myXinxi.name}}</p>
                        <p>签到<badge></badge><span>（未开通）</span></p>
                    </flexbox-item>
                </flexbox>
            </flexbox-item>
            <flexbox-item :span="1.3"><img :src="$store.state.myXinxi.member" alt=""></flexbox-item>
            <flexbox-item></flexbox-item>
          </flexbox>

          <flexbox class="my-jiner">
              <flexbox-item>
                  <flexbox orient="vertical">
                      <flexbox-item>积分</flexbox-item>
                      <flexbox-item>{{$store.state.myXinxi.obj.jifen}}</flexbox-item>
                  </flexbox>
              </flexbox-item>
              <flexbox-item>
                  <router-link to="">
                  <flexbox orient="vertical">
                      <flexbox-item>
                          金额充值
                          <em><img src="@/assets/my/explain.png" alt=""></em>
                      </flexbox-item>
                      <flexbox-item>{{$store.state.myXinxi.obj.chongzhi}}</flexbox-item>
                  </flexbox>
                  </router-link>
              </flexbox-item><flexbox-item>
                  <flexbox orient="vertical">
                      <flexbox-item>优惠卷</flexbox-item>
                      <flexbox-item>{{$store.state.myXinxi.obj.youhuijuan}}</flexbox-item>
                  </flexbox>
              </flexbox-item><flexbox-item>
                  <flexbox orient="vertical">
                      <flexbox-item>礼品</flexbox-item>
                      <flexbox-item>{{$store.state.myXinxi.obj.lipin}}</flexbox-item>
                  </flexbox>
              </flexbox-item>
          </flexbox>
      </section>
      <section class="my-dingdang">
          <group>
              <cell title="我的订单" value="查看全部订单" is-link link=""></cell>
          </group>
          <flexbox>
              <flexbox-item v-for="(item, index) in items" :key="index">
                  <flexbox orient="vertical">
                      <flexbox-item>
                          <img :src="item.img" alt="">
                          <badge :text="item.nab" v-if="item.nab > 0"></badge>
                      </flexbox-item>
                      <flexbox-item>{{item.name}}</flexbox-item>
                  </flexbox>
              </flexbox-item>
          </flexbox>
      </section>
      <section class="my-nav">
          <group>
              <cell-box is-link>
                  <em><img src="@/assets/my/address.png" alt=""></em>
                  <span>收货地址</span>
              </cell-box>
              <cell-box is-link>
                  <em><img src="@/assets/my/store.png" alt=""></em>
                  <span>青青菜园门店</span>
              </cell-box>
              <cell-box is-link>
                  <em><img src="@/assets/my/set-up.png" alt=""></em>
                  <span>设置</span>
              </cell-box>
          </group>
      </section>
      <wx-footer :selected="3"></wx-footer>
  </div>
</template>

<script>
import wxFooter from '@/components/wxFooter'
import {
    Flexbox,
    FlexboxItem,
    Badge,
    Group,
    Cell,
    CellBox
} from 'vux'
export default {
    components: {
        wxFooter,
        Flexbox,
        FlexboxItem,
        Badge,
        Group,
        Cell,
        CellBox
    },
    data() {
        return {
            items: [
                {
                    img: require('@/assets/my/payment.png'),
                    name: '待付款',
                    nab: 1
                },
                {
                    img: require('@/assets/my/pending-distribution.png'),
                    name: '待配送',
                    nab: 0
                },
                {
                    img: require('@/assets/my/distribution.png'),
                    name: '配送中',
                    nab: 0
                },
                {
                    img: require('@/assets/my/evaluate.png'),
                    name: '待评价',
                    nab: 0
                },
                {
                    img: require('@/assets/my/return.png'),
                    name: '退换货',
                    nab: 0
                }
            ]
        }
    }
}
</script>

<style>
html, body, #app{
    height: 100%;
}
.my{
    height: 100%;
    background: #eeeeee;
}
.my-header{
    padding: 15px 0;
    background: #fff;
}
.my-xinxi p{
    position: relative;
    font-weight: bold;
    margin: .04rem auto;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: .32rem;
}
.my-xinxi span:nth-of-type(2){
    font-size: .16rem;
    font-weight: 100;
    color: #888888;
    margin-left: .08rem;
}
.my-xinxi .vux-badge-dot{
    position: absolute;
    left: 14%;
    top: .04rem;
    padding: 3px;
}
.my-jiner{
    margin-top: .5rem;
}
.my-jiner .vux-flexbox-item{
    text-align: center;
    font-size: .26rem;
    color: #888888;
    margin-top: 0 !important;
    position: relative;
}
.my-jiner .vux-flexbox-item:nth-of-type(2){
    color: #ff9536;
}
.my-jiner em{
    width: .37rem;
    position: absolute;
    left: 60%;
    top: -.2rem;
}
.my-dingdang{
    background: #fff;
    margin: .2rem auto;
}
.my-dingdang .weui-cells{
    margin-top: 0;
}
.my-dingdang .weui-cell__ft{
    font-size: .2rem;
}
.my-dingdang .vux-flexbox-item:nth-of-type(1){
    width: .46rem;
    position: relative;
}
.my-dingdang .vux-flexbox-item:nth-of-type(2){
    text-align: center;
    color: #888888;
    font-size: .24rem;
}
.my-dingdang .vux-flexbox{
    padding: .2rem 0;
}
.my-dingdang .vux-flexbox span{
    position: absolute;
    right: -.06rem;
    top: -.06rem;
    width: .2rem;
    height: .2rem;
    line-height: .2rem;
    font-size: .16rem;
}
.my-nav em{
    width: .41rem;
    margin-right: .2rem;
}
.my-nav span{
    color: #888888;
    font-size: .28rem;
}
.my-nav .weui-cells{
    margin-top: 0;
}
</style>

