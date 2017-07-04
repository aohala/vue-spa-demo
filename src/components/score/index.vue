<template>
  <div class="rating-score">
    <span>
      <i class="fa fa-star star-outer is-active" v-for="n in starCount" :key="n"></i>
      <i class="fa fa-star-o star-outer">
        <i class="fa fa-star star-inner is-active"  v-if="scoreInner%2"></i>
      </i>
      <i class="fa fa-star-o star-outer" v-for="n in (5- starCount - 1)" :key="n"></i>      
    </span>
    <span v-if="showScore" style="font-size: 16px;margin-left: 10px">
      {{scoreInner}}分
    </span>
  </div>
</template>
<script>
export default {
  props: {
    score: {
      type: Number,
      default: 0
    },
    editable: {
      type: Boolean,
      default: false
    },
    showScore: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      scoreInner: this.score
    }
  },
  computed: {
    /** 完整的star数 */
    starCount () {
      return Math.floor(this.scoreInner / 2)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .rating-score
    span
      font-size 0
    .fa
      font-size 16px
      color #545454
      &.is-active
        color: #ffac2d
    .star-outer
      position relative
    .star-inner
      position absolute
      left 0
      top  0
      width: 50%;
      overflow: hidden;
</style>

