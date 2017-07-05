import * as movieApi from '@/api/movie'

export const fetchRecentMovie = ({ commit }) => {
  return movieApi.getRecentMovie().then(({data}) => {
    commit('FETCH_RECENT_SUCCESS', data)
  })
}

export const fetchCategory = ({ commit }) => {
  return movieApi.fetchCategory().then(({data}) => {
    commit('FETCH_CATEGORY_SUCCESS', data)
  })
}

export const update = ({ commit }, updatedData) => {
  commit('UPDATE', updatedData)
  commit('me/UPDATE_FAVORITE', updatedData, { root: true })
}
