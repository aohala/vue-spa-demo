<template>
  <div class="page-favorites">
    <p class="title is-4">我的收藏</p>
    <hr>
    <ul class="movie-list">
      <li v-for="(movie, index) in favorites" :key="index">
        <preview-card :movie="movie" @add-like="addLike" @add-favorites="addToFavorites" :show-brief="false"></preview-card>
      </li>
    </ul>
    <p class="title is-6" v-if="!favorites.length">暂未收藏任何电影</p>
  </div>
</template>
<script>
import PreviewCard from '@/components/preview-card'
import request from '@/api/request'

export default {
  components: {
    PreviewCard
  },
  computed: {
    favorites () {
      return this.$store.state.me.favorites
    }
  },
  methods: {
    addLike (movie) {
      request.post('like', {
        id: movie._id
      }).then(() => {
        // 更新store中该条movie值
        this.$store.dispatch('movie/update', {
          _id: movie._id,
          isLike: true
        })
      })
    },
    addToFavorites (movie) {
      request.post('favorites', {
        id: movie._id
      }).then(() => {
        // 更新store中该条movie值
        let isAdded = !movie.isAdded
        this.$store.dispatch('movie/update', {
          _id: movie._id,
          isAdded: isAdded
        })
        this.$store.commit(isAdded ? 'me/ADD_FAVORITE' : 'me/REMOVE_FAVORITE', Object.assign({}, movie, {isAdded}))
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .movie-list
    overflow hidden
    li
      float left
      width 25%
      padding 6px
</style>
