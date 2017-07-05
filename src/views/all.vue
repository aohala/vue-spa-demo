<template>
  <div class="page-all">
    <p class="title is-4">{{activeTag}}</p>
    <div class="columns">
    <ul class="column movie-list">
      <li v-for="(movie, index) in list" :key="index">
        <preview-card :movie="movie" @add-like="addLike" @add-favorites="addToFavorites"></preview-card>
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
import request from '@/api/request'

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
  methods: {
    addLike (movie) {
      request.post('like', {
        id: movie._id
      }).then(() => {
        this.updateList({_id: movie._id, isLike: true})
      })
    },
    addToFavorites (movie) {
      request.post('favorites', {
        id: movie._id,
        isAdd: !movie.isAdded
      }).then(() => {
        let isAdded = !movie.isAdded
        this.updateList({_id: movie._id, isAdded})
        this.$store.commit(isAdded ? 'me/ADD_FAVORITE' : 'me/REMOVE_FAVORITE', Object.assign({}, movie, {isAdded}))
      })
    },
    updateList (editedMovie) {
      // 更新state中该条movie值
      let index = this.list.findIndex(item => item._id === editedMovie._id)
      if (index === -1) return
      let movie = Object.assign({}, this.list[index], editedMovie)
      this.list.splice(index, 1)
      this.list.splice(index, 0, movie)
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

