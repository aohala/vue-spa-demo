<template>
  <nav class="movie-category">
    <p>
      分类
    </p>
    <router-link class="tag" :class="{'is-primary': activeTag === '所有'}" to="/all">所有</router-link>
    <router-link :to="`/all?type=${tag}`" class="tag" :class="{'is-primary': activeTag === tag}" v-for="(tag, index) in tags" :key="index">
      {{tag}}
    </router-link>
  </nav>
</template>
<script>

export default {
  props: ['activeTag'],
  created () {
    if (!this.tags.length) this.$store.dispatch('movie/fetchCategory')
  },
  computed: {
    tags () {
      return this.$store.getters['movie/getCategorys']
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/style/common.styl'
  .tag
    margin-right 4px
    margin-bottom 8px
    color #333
    cursor pointer
    &:hover
      color primary-color
    &.is-primary
      color #fff
</style>

