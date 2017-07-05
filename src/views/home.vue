<template>
  <div class="page-home">
    <!--<div class="column is-2">
      <movie-category></movie-category>      
    </div>-->
    <p class="title is-4">正在上映</p>
    <hr>
    <ul class="movie-list">
      <li v-for="(movie, index) in moviesNow" :key="index">
        <preview-card :movie="movie" @add-like="addLike" @add-favorites="addToFavorites"></preview-card>
      </li>
    </ul>
    <p class="title is-4" style="margin: 30px auto 20px">即将上映</p>
    <hr>
    <ul class="movie-list">
      <li v-for="(movie, index) in moviesComing" :key="index">
        <preview-card :movie="movie" @add-like="addLike" @add-favorites="addToFavorites"></preview-card>
      </li>
    </ul>
  </div>
</template>
<script>
import MovieCategory from '@/components/category'
import PreviewCard from '@/components/preview-card'
import request from '@/api/request'

export default {
  components: {
    MovieCategory,
    PreviewCard
  },
  created () {
    if (!this.moviesNow.length) this.$store.dispatch('movie/fetchRecentMovie')
  },
  computed: {
    recentMovie () {
      return this.$store.getters['movie/getRecent']
    },
    moviesNow () {
      return this.recentMovie.now
    },
    moviesComing () {
      return this.recentMovie.coming
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

