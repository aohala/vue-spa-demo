import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import All from '@/views/all'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/all',
      name: 'All',
      component: All
    }
  ]
})
