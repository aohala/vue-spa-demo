import Vue from 'vue'
import Vuex from 'vuex'

import movie from './modules/movie'
import me from './modules/me'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movie,
    me
  },
  strict: process.env.NODE_ENV !== 'production'
})
