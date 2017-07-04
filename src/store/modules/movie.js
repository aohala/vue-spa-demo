import * as actions from '../actions/movie'

const state = {
  // 缓存分类
  categorys: [],
  // 缓存最近上映
  recent: {now: [], coming: []}
}

const mutations = {
  FETCH_RECENT_SUCCESS (state, recent) {
    state.recent = recent
  },
  FETCH_CATEGORY_SUCCESS (state, list) {
    state.categorys = list
  }
}

const getters = {
  getRecent: state => state.recent,
  getCategorys: state => state.categorys
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
