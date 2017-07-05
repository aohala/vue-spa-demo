<template>
  <div class="card pointer">
    <div class="card-image">
      <figure class="image">
        <img :src="movie.cover_url">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-6">
            <strong>{{movie.title}}</strong>
            <score :score="+movie.score" style="padding: 4px 0"></score>
          </p>
        </div>
      </div>
      <div class="content">
        <span v-if="showBrief">{{movie.brief}}</span>
        <br>
        <small>上映时间：{{movie.release_date}}</small>
      </div>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item" @click="$emit('add-like', movie)">
        <i class="fa" :class="movie.isLike ? 'fa-heart':'fa-heart-o'"></i>
        <span>喜欢</span>
      </p>
      <p class="card-footer-item" @click="$emit('add-favorites', movie)">
        <i class="fa" :class="movie.isAdded ? 'fa-star':'fa-star-o'"></i>
        <span>{{movie.isAdded ? '已收藏' : '收藏'}}</span>
      </p>
    </footer>
  </div>

</template>
<script>
import Score from '../score'

export default {
  props: {
    movie: {
      type: Object,
      default: () => {
        return {}
      }
    },
    showBrief: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      showScoreAction: false
    }
  },
  components: {
    Score
  }
}
</script>
<style lang="stylus" scoped>
  @import '~@/style/common.styl'
  .card
    transition opacity 200ms ease
    &:hover
      opacity .8
  .card-content
    padding .8rem
    .content
      margin-top: 26px;
  .card-image
    height 280px
    overflow hidden
  .media-content
    width 100%
    height: 16px
    .title
      white-space nowrap
      text-overflow ellipsis
      overflow hidden
  .card-footer
    .fa
      font-size 15px
      margin-right 4px
    .fa-heart
      color red
    .fa-star
      color primary-color
    
</style>

