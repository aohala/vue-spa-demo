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
  },
  UPDATE (state, updatedData) {
    let indexInNow = state.recent.now.findIndex(item => item._id === updatedData._id)
    if (indexInNow !== -1) {
      let movie = Object.assign({}, state.recent.now[indexInNow], updatedData)
      state.recent.now.splice(indexInNow, 1)
      state.recent.now.splice(indexInNow, 0, movie)
      return
    }
    let indexInComing = state.recent.coming.findIndex(item => item._id === updatedData._id)
    if (indexInComing !== -1) {
      let movie = Object.assign({}, state.recent.coming[indexInComing], updatedData)
      state.recent.coming.splice(indexInComing, 1)
      state.recent.coming.splice(indexInComing, 0, movie)
    }
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
