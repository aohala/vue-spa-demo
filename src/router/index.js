import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import All from '@/views/all'
import Favorites from '@/views/favorites'

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
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites
    }
  ]
})
