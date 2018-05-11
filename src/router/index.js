import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Classify from '@/views/classify'
import Cooperate from '@/views/cooperate'
import My from '@/views/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/views/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/views/cooperate',
      name: 'cooperate',
      component: Cooperate
    },
    {
      path: '/views/my',
      name: 'my',
      component: My
    }
  ]
})
