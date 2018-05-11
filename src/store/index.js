import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        myXinxi: {
            portrait: require('@/assets/my/portrait.png'),
            member: require('@/assets/my/member.png'),
            name: '131****7096',
            obj: {
                jifen: 0,
                chongzhi: 0,
                youhuijuan: 0,
                lipin: 0
            }
        }
    },
    mutations: {       
    }
})