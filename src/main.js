import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
/* 挂载Vue组件到页面 */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
