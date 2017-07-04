<template>
  <div class="page-all">
    <p class="title is-4">{{activeTag}}</p>
    <div class="columns">
    <ul class="column movie-list">
      <li v-for="(movie, index) in list" :key="index">
        <preview-card :movie="movie"></preview-card>
      </li>
    </ul>
    <div class="column is-2">
      <movie-category :active-tag="activeTag"></movie-category>      
    </div>
    </div>
  </div>
</template>
<script>
import MovieCategory from '@/components/category'
import PreviewCard from '@/components/preview-card'
import { fetchAllMovie } from '@/api/movie'

export default {
  components: {
    MovieCategory,
    PreviewCard
  },
  data () {
    return {
      list: []
    }
  },
  computed: {
    activeTag () {
      return this.$route.query.type || '所有'
    }
  },
  watch: {
    activeTag (tag) {
      fetchAllMovie(tag).then(({data}) => {
        this.list = data
      })
    }
  },
  beforeCreate () {
    fetchAllMovie().then(({data}) => {
      this.list = data
    })
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
      margin-bottom 12px
</style>

