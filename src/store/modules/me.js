import * as actions from '../actions/me'

const state = {
  favorites: [],
  isLogin: false
}

const mutations = {
  ADD_FAVORITE (state, movie) {
    if (movie instanceof Array) {
      movie.forEach(item => {
        // 若存在该movie则不添加
        if (!state.favorites.find(favorite => favorite._id === item._id)) state.favorites.push(item)
      })
      return
    }
    if (!state.favorites.find(favorite => favorite._id === movie._id)) state.favorites.push(movie)
  },
  REMOVE_FAVORITE (state, movie) {
    let index = state.favorites.findIndex(favorite => favorite._id === movie._id)
    if (index >= 0) state.favorites.splice(index, 1)
  },
  UPDATE_FAVORITE (state, movie) {
    let index = state.favorites.findIndex(item => item._id === movie._id)
    if (index !== -1) {
      movie = Object.assign({}, state.favorites[index], movie)
      state.favorites.splice(index, 1)
      state.favorites.splice(index, 0, movie)
    }
  }
}

const getters = {
  isLogin: state => state.isLogin
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
