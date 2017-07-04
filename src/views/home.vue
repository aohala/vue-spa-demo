<template>
  <div class="page-home">
    <!--<div class="column is-2">
      <movie-category></movie-category>      
    </div>-->
    <p>正在上映</p>
    <hr>
    <ul class="movie-list">
      <li v-for="(movie, index) in moviesNow" :key="index">
        <preview-card :movie="movie"></preview-card>
      </li>
    </ul>
    <p>即将上映</p>
    <hr>
    <ul class="movie-list">
      <li v-for="(movie, index) in moviesComing" :key="index">
        <preview-card :movie="movie"></preview-card>
      </li>
    </ul>
  </div>
</template>
<script>
import MovieCategory from '@/components/category'
import PreviewCard from '@/components/preview-card'

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

