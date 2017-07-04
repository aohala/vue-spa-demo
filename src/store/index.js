import Vue from 'vue'
import Vuex from 'vuex'

import movie from './modules/movie'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movie
  },
  strict: process.env.NODE_ENV !== 'production'
})
